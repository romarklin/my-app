// app/blog/[id]/page.tsx
import Link from "next/link";
import { getPost } from "@/lib/blog";
import { notFound } from "next/navigation";

export default async function BlogPostPage(props: { params: Promise<{ id: string }> }) {
  // 1. Await the params (Crucial for Next.js 15)
  const resolvedParams = await props.params;
  
  console.log("🌐 Page received params:", resolvedParams);

  // 2. Convert String ID to Number
  const id = Number(resolvedParams.id);

  // 3. Check for invalid IDs (NaN)
  if (isNaN(id)) {
    console.error("❌ ID is NaN (Not a Number)");
    return notFound();
  }

  // 4. Fetch the post
  const post = await getPost(id);

  if (!post) {
    return notFound();
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <Link href="/blog" className="text-gray-500 hover:underline mb-4 block">
        &larr; Back to Blog
      </Link>
      
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="whitespace-pre-wrap text-lg">{post.content}</p>
      
      <div className="mt-8 text-sm text-gray-400">
        Post ID: {post.id}
      </div>
    </div>
  );
}