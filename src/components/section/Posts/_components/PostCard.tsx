"use client";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  id: number;
  title: string;
  body: string;
};

export const PostCard = ({ id, title, body }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-white border border-gray-200 shadow rounded-xl p-4 transition hover:shadow-md"
    >
      <h2 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h2>
      <p className="text-gray-600 text-sm whitespace-pre-line line-clamp-4">
        {body}
      </p>
      <Link
        href={`posts/${id}`}
        className="bg-blue-500 px-2 flex text-center justify-center mt-2 py-1 w-full rounded-md text-white hover:bg-blue-600 transition"
      >
        مشاهده جزئیات
      </Link>
    </motion.div>
  );
};
