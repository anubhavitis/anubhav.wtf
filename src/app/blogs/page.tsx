"use client";
import { BlogComponent } from "@/components/Blogs";
import { BlogPost, getAllBlogs, getAllTags } from "@/lib/blogs";
import { useState } from "react";
import { useEffect } from "react";

export default function Blogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const [blogsData, tagsData] = await Promise.all([
        getAllBlogs(selectedTags),
        getAllTags(),
      ]);
      setBlogs(blogsData);
      setAllTags(tagsData);
    };
    fetchData();
  }, [selectedTags]);

  const handleTagClick = (tag: string) => {
    setSelectedTags(
      selectedTags.includes(tag)
        ? selectedTags.filter((t) => t !== tag)
        : [...selectedTags, tag]
    );
  };

  return (
    <div className="flex flex-col my-16">
      <div className="flex flex-col gap-2 mb-10">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          I write about stuff I learn
        </h1>
        <p>
          Ser Feynman says, if you can't explain it simply, you don't know it
          well enough. So here is my attempt to explain stuff I learn.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-10">
        {allTags.length === 0 ? (
          <span className="text-gray-400 text-sm">No tags found.</span>
        ) : (
          <>
            {allTags.map((tag) => (
              <button
                key={tag}
                className={`
                  text-gray-600 dark:text-gray-300 
                  px-2 inline-block rounded-full text-xs 
                  shadow-sm dark:shadow-gray-600 hover:bg-green-200 dark:hover:bg-green-600
                  cursor-pointer
                  ${
                    selectedTags.includes(tag)
                      ? "bg-green-300 dark:bg-green-800 text-blackdark:text-white "
                      : ""
                  }
                `}
                onClick={() => handleTagClick(tag)}
                aria-pressed={selectedTags.includes(tag)}
              >
                {tag}
              </button>
            ))}
          </>
        )}
      </div>

      <div className="flex flex-col w-full">
        {blogs.map((blog) => (
          <BlogComponent key={blog.slug} {...blog} />
        ))}
      </div>
    </div>
  );
}
