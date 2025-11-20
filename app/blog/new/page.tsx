// app/blog/new/page.tsx
import { createPost } from "@/lib/blog"; // Import your server action
import Link from "next/link";

export default function NewPostPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Create a New Post</h1>

      {/* The 'action' prop connects the form directly to your server function */}
      <form action={createPost} className="flex flex-col gap-4 max-w-md">
        
        {/* 1. Title Input */}
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input 
            name="title"       
            type="text" 
            className="border p-2 rounded w-full" 
            required
          />
        </div>

        {/* 2. Content Input */}
        <div>
          <label className="block mb-1 font-medium">Content</label>
          <textarea 
            name="content"      
            className="border p-2 rounded w-full" 
            rows={5}
            required
          />
        </div>

        {/* 3. Submit Button */}
        <div className="flex gap-2">
          <button 
            type="submit" 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Save Post
          </button>
          
          <Link href="/blog" className="bg-gray-300 px-4 py-2 rounded text-black">
            Cancel
          </Link>
        </div>

      </form>
    </div>
  );
}