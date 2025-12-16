import React from "react";
import Link from "next/link";
import { BlogPost } from "@/lib/blogs";

interface CategoryPreviewProps {
  posts: BlogPost[];
}

export default function CategoryPreview({ posts }: CategoryPreviewProps) {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={post.link}
          className="block group hover:bg-gray-50 dark:hover:bg-gray-800/50 p-3 -mx-3 rounded-lg transition-colors no-underline hover:no-underline"
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-medium text-gray-900 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                {post.description}
              </p>
            </div>
            <time className="text-xs text-gray-500 dark:text-gray-500 whitespace-nowrap sm:mt-1">
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
              })}
            </time>
          </div>
        </Link>
      ))}
    </div>
  );
}
