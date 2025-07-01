import { fetcher } from "@/lib/fetcher";
import { Post } from "../_services";

export const getPosts = async (): Promise<Post[]> => {
  return fetcher("/posts");
};
