// lib/blog.ts
'use server'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type Post = {
  id: number;
  title: string;
  content: string;
};


const globalForPosts = global as unknown as { posts: Post[] };

const initialPosts: Post[] = [
  { id: 1, title: "My First Post", content: "Welcome to my personal website!" },
  { id: 2, title: "Next.js is Cool", content: "Server actions make life easier." },
];

let posts = globalForPosts.posts || initialPosts;

if (process.env.NODE_ENV !== 'production') globalForPosts.posts = posts;

export async function getPosts() {
  return posts;
}

export async function getPost(id: number) {
  return posts.find((post) => post.id === id);
}

export async function createPost(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  const newPost: Post = {
    id: Date.now(),
    title,
    content,
  };

  posts.push(newPost);
  
  revalidatePath("/blog");
  redirect("/blog");
}

export async function editPost(formData: FormData) {
  const id = Number(formData.get("id"));
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  const postIndex = posts.findIndex((p) => p.id === id);
  if (postIndex > -1) {
    posts[postIndex] = { id, title, content };
  }

  revalidatePath("/blog");
  revalidatePath(`/blog/${id}`);
  redirect(`/blog/${id}`);
}

export async function deletePost(id: number) {
  
  posts = posts.filter((post) => post.id !== id);
  
  
  if (process.env.NODE_ENV !== 'production') globalForPosts.posts = posts;
  
  revalidatePath("/blog");
}