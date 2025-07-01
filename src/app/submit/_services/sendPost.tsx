import { fetcher } from "@/lib/fetcher";
import { SubmitPayload } from ".";

export const sendPost = async (payload: SubmitPayload) => {
  return await fetcher("/posts", {
    method: "POST",
    body: JSON.stringify(payload),
  });
};
