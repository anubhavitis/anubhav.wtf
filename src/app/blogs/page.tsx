"use client";
import { BlogComponent } from "@/components/Blogs";
import { BlogPost, getAllBlogs, getAllTags } from "@/lib/blogs";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function Blogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const searchParams = useSearchParams();
  const tag = searchParams.get("tag");

  useEffect(() => {
    const fetchData = async () => {
      const blogsData = await getAllBlogs(tag ? [tag] : []);
      setBlogs(blogsData);
    };
    fetchData();
  }, [tag]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2 mt-24 mb-10">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          I write about stuff I learn
        </h1>
        <p>
          Ser Feynman says, if you can't explain it simply, you don't know it
          well enough. So here is my attempt to explain stuff I learn.
        </p>
      </div>

      {tag && (
        <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          {tag}
        </div>
      )}

      <div className="flex flex-col w-full">
        {blogs.map((blog) => (
          <BlogComponent key={blog.slug} {...blog} />
        ))}
      </div>
    </div>
  );
}
