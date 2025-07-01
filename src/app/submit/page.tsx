"use client";
import { useState } from "react";
import { sendPost } from "./_services/sendPost";
import { SubmitPayload } from "./_services";

export default function SubmitPost() {
  const [form, setForm] = useState<Omit<SubmitPayload, "userId">>({
    title: "",
    body: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    if (!form.title.trim() || !form.body.trim()) {
      setError("عنوان و محتوا هر دو الزامی هستند.");
      setLoading(false);
      return;
    }

    try {
      const newPost = await sendPost({
        ...form,
        userId: 1,
      });

      setSuccessMessage(`پست با شناسه ${newPost.id} با موفقیت ارسال شد!`);
      setForm({ title: "", body: "" });
    } catch (err: any) {
      setError(err.message || "خطای ناشناخته");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">ارسال پست جدید</h2>

      {error && <p className="mb-4 text-red-600">{error}</p>}
      {successMessage && (
        <p className="mb-4 text-green-600">{successMessage}</p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="title"
          placeholder="عنوان پست"
          value={form.title}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <textarea
          name="body"
          placeholder="محتوای پست"
          value={form.body}
          onChange={handleChange}
          rows={5}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "در حال ارسال..." : "ارسال پست"}
        </button>
      </form>
    </div>
  );
}
