import React from "react";
import Link from "next/link";
import { BlogPost } from "@/lib/blogs";

interface InlineLinksProps {
  posts: BlogPost[];
  viewAllLink?: string;
  viewAllText?: string;
}

export default function InlineLinks({
  posts,
  viewAllLink,
  viewAllText = "view all",
}: InlineLinksProps) {
  return (
    <div className="text-sm">
      {posts.map((post, index) => (
        <React.Fragment key={post.slug}>
          <Link href={post.link}>{post.title}</Link>
          {index < posts.length - 1 && ", "}
        </React.Fragment>
      ))}
      {viewAllLink && (
        <>
          {posts.length > 0 && ", "}
          <Link href={viewAllLink}>{viewAllText} →</Link>
        </>
      )}
    </div>
  );
}
