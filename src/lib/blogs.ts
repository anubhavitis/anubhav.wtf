'use server';

import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: Date;
  link: string;
}

export async function getAllBlogs(): Promise<BlogPost[]> {
  const blogsDirectory = path.join(process.cwd(), 'public/blogs');
  const filenames = fs.readdirSync(blogsDirectory);
  
  const blogs = filenames
    .filter(filename => filename.endsWith('.md'))
    .map(filename => {
      const slug = filename.replace(/\.md$/, '');
      const fullPath = path.join(blogsDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      // Parse front matter
      const { data } = matter(fileContents);
      
      return {
        slug,
        title: data.title || slug,
        description: data.description || '',
        date: new Date(data.date || ''),
        link: `/blogs/${slug}`
      };
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime());
    
  return blogs;
} 