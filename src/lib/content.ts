"use server";

import fs from "fs";
import path from "path";

export interface FavoriteArticle {
  title: string;
  author: string;
  url: string;
  description: string;
}

export interface FavoriteBook {
  title: string;
  author: string;
  year: string;
  description: string;
}

export async function getFavoriteArticles(): Promise<FavoriteArticle[]> {
  const filePath = path.join(
    process.cwd(),
    "public/content/favorite-articles.json"
  );
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}

export async function getFavoriteBooks(): Promise<FavoriteBook[]> {
  const filePath = path.join(
    process.cwd(),
    "public/content/favorite-books.json"
  );
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}

export async function getPhilosophies(): Promise<string> {
  const filePath = path.join(
    process.cwd(),
    "public/content/philosophies.md"
  );
  const fileContents = fs.readFileSync(filePath, "utf8");
  return fileContents;
}
