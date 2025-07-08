import React from "react";
import { notFound } from "next/navigation";
import matter from "gray-matter";
import { Metadata } from "next";
import { readFileSync } from "fs";
import { join } from "path";
import BlogContent from "./BlogContent.tsx";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Helper function to fetch blog data
async function getBlogData(slug: string) {
  try {
    const filePath = join(process.cwd(), "public", "blogs", `${slug}.md`);
    const markdownContent = readFileSync(filePath, "utf8");
    const { data, content } = matter(markdownContent);

    return {
      frontmatter: data,
      content,
      title: data.title || `Blog: ${slug}`,
      description: data.description || `Read about ${slug}`,
      date: data.date ? new Date(data.date) : null,
    };
  } catch (error) {
    return null;
  }
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const blogData = await getBlogData(slug);

  if (!blogData) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const { title, description, date } = blogData;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: date?.toISOString(),
      authors: ["Anubhav"],
      url: `/blogs/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    other: {
      "article:published_time": date?.toISOString() || "",
      "article:author": "Anubhav",
    },
  };
}

async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const blogData = await getBlogData(slug);

  if (!blogData) {
    notFound();
  }

  return (
    <BlogContent
      content={blogData.content}
      title={blogData.title}
      date={blogData.date}
    />
  );
}

export default Page;
