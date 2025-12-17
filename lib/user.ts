'use server'

import { db } from '@/db'
import { usersTable } from '@/db/schema'
import { compare, hash } from 'bcryptjs'
import { redirect } from 'next/navigation'
import { cookies, headers } from 'next/headers'
import { eq } from 'drizzle-orm'

export async function register(form: FormData) {
  const login = String(form.get('login'))
  const password = String(form.get('password'))
  await db.insert(usersTable).values({
    email: login, // short for login: login
    password: await hash(password, 10),
  })
}

export async function login(form: FormData) {
  const login = String(form.get('login'))
  const password = String(form.get('password'))
  const users = await db.select().from(usersTable)
    .where(eq(usersTable.email, login))
  const loggedIn = users.length > 0
    ? await compare(password, users[0].password)
    : false

  if (!loggedIn) {
        // Lancer une erreur en cas d'échec de connexion
        
        throw new Error("Identifiants de connexion invalides.");    
  }
  const secret = process.env.SECRET
    const signature = await hash(secret + login, 10)
    const cookieStore = await cookies()
    cookieStore.set('session', `${login};${signature}`)

redirect((await headers()).get('referer') ?? '/')

}

const secret = process.env.SECRET

export async function getCurrentUser() {
  // Get the session cookie
  const cookieStore = await cookies()
  const session = cookieStore.get('session')?.value
  if (!session) return null

  // Check the signature
  const [login, signature] = session.split(';')
  const correct = await compare(signature, secret + login)

  return correct ? login : null}
