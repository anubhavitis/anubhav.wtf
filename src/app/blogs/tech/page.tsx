"use client";
import { BlogComponent } from "@/components/Blogs";
import { BlogPost, getBlogsByCategory } from "@/lib/blogs";
import { useState, useEffect } from "react";

export default function TechBlogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const blogsData = await getBlogsByCategory("tech");
      setBlogs(blogsData);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2 mt-24 mb-10">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Tech Essays
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Thoughts on software, web3, and technology
        </p>
      </div>

      <div className="flex flex-col w-full">
        {blogs.map((blog) => (
          <BlogComponent key={blog.slug} {...blog} />
        ))}
      </div>
    </div>
  );
}
