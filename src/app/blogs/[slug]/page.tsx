import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { BlogContent } from "./BlogContent";
import { BlogPost, getBlogBySlug } from "@/lib/blogs";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const blogData = await getBlogBySlug(slug);

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

  const blogData = await getBlogBySlug(slug);

  if (!blogData) {
    notFound();
  }

  return <BlogContent {...blogData} />;
}

export default Page;
