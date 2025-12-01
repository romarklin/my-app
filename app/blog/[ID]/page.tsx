// app/blog/[id]/page.ts
import Link from "next/link";
import { getPost } from "@/lib/blog";
import { notFound } from "next/navigation";

type BlogPostPageProps = {
  params: Promise<{ id: string }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
 
  const id = Number((await params).id);
  const post = await getPost(id);

  if (!post) {
    return <p>Hello {id}</p>
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <Link href="/blog" className="text-gray-500 hover:underline mb-4 block">
        &larr; Back to Blog
      </Link>
      
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg text-white leading-relaxed whitespace-pre-wrap">
        {post.content}
      </p>

      <div className="mt-8 border-t pt-4">
        <Link 
          href={`/blog/edit/${post.id}`} 
          className="bg-gray-200 text-gray-800 px-9 py-2 rounded hover:bg-gray-300"
        >
          Edit this Post
        </Link>
      </div>
    </div>
  );
}