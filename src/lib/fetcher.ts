const API_URL: string = process.env.NEXT_PUBLIC_API_URL ?? "";

if (!API_URL) throw new Error("NEXT_PUBLIC_API_URL is not defined");

export const fetcher = async <T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> => {
  const res = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    const errorBody = await res.text();
    throw new Error(`Fetch error: ${res.status} - ${errorBody}`);
  }

  return res.json() as Promise<T>;
};
