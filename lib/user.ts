'use server'

import { compare, hash } from 'bcryptjs'

export async function register(form: FormData) {
  const login = String(form.get('login'))
  const password = String(form.get('password'))
  await db.insert(usersTable).values({
    login, // short for login: login
    password: await hash(password, 10),
  })
}

export async function login(form: FormData) {
  const login = String(form.get('login'))
  const password = String(form.get('password'))
  const users = await db.select().from(usersTable)
    .where(eq(usersTable.login, login))
  const loggedIn = users.length > 0
    ? await compare(password, users[0].password)
    : false
  // To be continued... (cookie generation)
}