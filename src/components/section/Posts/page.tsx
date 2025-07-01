"use client";
import { useEffect, useState } from "react";
import { Post } from "./_services";
import { getPosts } from "./_services/getPosts";
import { PostCard } from "./_components/PostCard";

const POSTS_PER_PAGE = 10;

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const goToNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const goToPrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  if (loading) return <p className="text-center mt-10">Loading posts...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <div className="p-4">
      <div className="mb-4 max-w-md mx-auto">
        <input
          type="text"
          placeholder="جستجو بر اساس عنوان پست..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1); // وقتی جستجو تغییر کرد، برگرد به صفحه ۱
          }}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {paginatedPosts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>

      {/* pagination controls */}
      <div className="flex flex-row-reverse justify-center items-center gap-4 mt-6">
        <button
          onClick={goToPrev}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
        >
          Previous
        </button>
        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={goToNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
}
