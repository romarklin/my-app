// app/blog/page.tsx
import Link from "next/link";
import { getPosts, deletePost } from "@/lib/blog";

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Blog</h1>
        
        {/* --- THIS IS THE BUTTON THAT MAKES IT WORK --- */}
        <Link 
          href="/blog/new" 
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          + Create New Post
        </Link>
        {/* --------------------------------------------- */}
      </div>

      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="border p-4 rounded shadow-sm flex justify-between">
            <Link href={`/blog/${post.id}`} className="font-bold hover:underline">
              {post.title}
            </Link>
            <form action={deletePost.bind(null, post.id)}>
              <button className="text-red-500 text-sm border border-red-500 px-2 py-1 rounded hover:bg-red-50">
                Delete
              </button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
}