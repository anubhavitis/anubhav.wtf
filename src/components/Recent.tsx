import React from "react";
import { BlogComponent } from "./Blogs";
import { BlogPost } from "@/lib/blogs";

interface RecentProps {
  blogs: BlogPost[];
}

const Recent = ({ blogs }: RecentProps) => {
  const recentBlogs = blogs.slice(0, 2); // Show only the 3 most recent blogs

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-10">
          Recent Blogs
        </h1>
      </div>
      <div className="flex flex-col gap-2">
        {recentBlogs.map((blog) => (
          <BlogComponent key={blog.slug} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default Recent;
