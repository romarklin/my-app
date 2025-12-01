// app/blog/edit/[id]/page.ts
import { editPost, getPost } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";

type EditPageProps = {
  params: Promise<{ id: string }>
}

export default async function EditPostPage(props: EditPageProps) {
  const id = Number((await props.params).id);
  const post = await getPost(id);

  if (!post) notFound();

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">Edit Post</h1>
      
      <form action={editPost} className="flex flex-col gap-4">
        {/* Hidden input to pass the ID to the server action */}
        <input type="hidden" name="id" value={post.id} />

        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input 
            name="title" 
            defaultValue={post.title} 
            required 
            className="w-full border p-2 rounded" 
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Content</label>
          <textarea 
            name="content" 
            rows={5} 
            defaultValue={post.content}
            required 
            className="w-full border p-2 rounded" 
          />
        </div>

        <div className="flex gap-4">
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
            Update Post
          </button>
          <Link href={`/blog/${id}`} className="bg-gray-200 px-4 py-2 rounded">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}