import React from "react";
import { Blog, BlogComponent } from "./Blogs";

const blogs: Blog[] = [
  {
    title: "Microservices Architecture: What, Where & Why?",
    description:
      "A deep dive into Microservices Architecture, its benefits, and how it can be implemented in a project",
    date: new Date("August 22, 2022"),
    link: "/blogs/microservices-architecture-what-where-why",
  },
];

const Recent = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-10">
          Recent Blogs
        </h1>
      </div>
      <div className="flex flex-col gap-2 w-fit">
        {blogs
          .sort((a, b) => b.date.getTime() - a.date.getTime())
          .map((blog) => (
            <BlogComponent key={blog.title} {...blog} />
          ))}
      </div>
    </div>
  );
};

export default Recent;
