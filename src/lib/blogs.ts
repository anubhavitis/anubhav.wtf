"use server";

import matter from "gray-matter";
import fs from "fs";
import path from "path";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: Date;
  link: string;
  tags: string[];
  category: string;
  content: string;
  cover?: string;
}

// Module-level cache - will persist for the lifetime of the server instance
let fetchedBlogs: BlogPost[] = [];

async function fetchBlogs() {
  const blogsDirectory = path.join(process.cwd(), "public/blogs");
  const filenames = fs.readdirSync(blogsDirectory);

  const blogs = filenames
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const fullPath = path.join(blogsDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Parse front matter
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        description: data.description || "",
        date: new Date(data.date || ""),
        link: `/blogs/${slug}`,
        tags: data.tags
          ? data.tags.split(",").map((tag: string) => tag.trim())
          : [],
        category: data.category || "tech",
        content: content,
        cover: data.cover,
      };
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  return blogs;
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  if (fetchedBlogs.length == 0) {
    fetchedBlogs = await fetchBlogs();
  }

  return fetchedBlogs.find((blog) => blog.slug === slug) || null;
}

export async function getAllBlogs(tags: string[] = []): Promise<BlogPost[]> {
  if (fetchedBlogs.length == 0) {
    fetchedBlogs = await fetchBlogs();
  }

  return fetchedBlogs.filter((blog) => {
    if (tags.length == 0) {
      return true;
    }
    return blog.tags.some((tag) => tags.includes(tag));
  });
}

export async function getAllTags(): Promise<string[]> {
  if (fetchedBlogs.length == 0) {
    fetchedBlogs = await fetchBlogs();
  }

  return Array.from(new Set(fetchedBlogs.flatMap((blog) => blog.tags)));
}

export async function getBlogsByCategory(
  category: string,
  limit?: number
): Promise<BlogPost[]> {
  if (fetchedBlogs.length == 0) {
    fetchedBlogs = await fetchBlogs();
  }

  const filtered = fetchedBlogs.filter((blog) => blog.category === category);
  return limit ? filtered.slice(0, limit) : filtered;
}
