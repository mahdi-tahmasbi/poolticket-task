import { Post } from "@/components/section/Posts/_services";
import { fetcher } from "@/lib/fetcher";

export const getPost = async (id: string): Promise<Post> => {
  return await fetcher(`/posts/${id}`);
};
