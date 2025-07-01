import { getPost } from "./_services/getPost";
import { Post } from "@/components/section/Posts/_services";

export default async function PostDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const post: Post = await getPost(params.id);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{post?.title}</h1>
      <p className="text-gray-700 whitespace-pre-line">{post?.body}</p>

      <div className="mt-6 text-sm text-gray-500">
        <p>Post ID: {post?.id}</p>
        <p>User ID: {post?.userId}</p>
      </div>
    </div>
  );
}
