"use client";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { CopyBlock } from "react-code-blocks";
import { useTheme } from "next-themes";
import { Theme, ThemeModes } from "react-code-blocks/dist/types";

export interface BlogContentProps {
  content: string;
  title: string;
  date: Date | null;
  tags: string[];
  cover?: string;
  coverCaption?: string;
}

export function BlogContent({ content, title, date, tags, cover, coverCaption }: BlogContentProps) {
  const { theme } = useTheme();
  const [codeTheme, setCodeTheme] = useState<Theme>({
    mode: theme as ThemeModes,
  });

  useEffect(() => {
    setCodeTheme({ mode: theme as ThemeModes });
    console.log(content, tags);
  }, [theme]);

  return (
    <article className="prose dark:prose-invert max-w-3xl mx-auto py-8 mt-24 mb-16 overflow-x-hidden">
      {cover && (
        <figure className="mb-8">
          <img
            src={cover}
            alt={title}
            className="w-full h-auto rounded-lg shadow-lg dark:shadow-gray-700/50"
          />
          {coverCaption && (
            <figcaption className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
              <ReactMarkdown
                components={{
                  p: ({ children }) => <span>{children}</span>,
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {children}
                    </a>
                  ),
                }}
              >
                {coverCaption}
              </ReactMarkdown>
            </figcaption>
          )}
        </figure>
      )}
      <div className="flex flex-col gap-2 mt-12 mb-6">
        {title && (
          <div className="text-4xl font-bold text-gray-900 dark:text-gray-100 ">
            {title}
          </div>
        )}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 inline-block rounded-full text-xs 
                  text-gray-500 dark:text-gray-400  
                  shadow-sm dark:shadow-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {date && (
          <div className="text-md text-gray-600 dark:text-gray-400">
            {date.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </div>
        )}
      </div>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]} // Use GitHub Flavored Markdown
        components={{
          img: ({ src, alt }) => (
            <div className="my-8 flex justify-center">
              <img
                src={src}
                alt={alt}
                className="max-w-full h-auto rounded-lg shadow-lg dark:shadow-gray-700/50"
              />
            </div>
          ),
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 mt-12 leading-tight">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-5 leading-tight">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4 leading-snug">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-3 leading-snug">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="text-lg leading-tight mb-6 text-gray-700 dark:text-gray-300">
              {children}
            </p>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline decoration-2 underline-offset-2 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          strong: ({ children }) => (
            <strong className="font-bold text-gray-900 dark:text-gray-100">
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="italic text-gray-800 dark:text-gray-200">
              {children}
            </em>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-outside ml-6 space-y-3 mb-6 text-lg text-gray-700 dark:text-gray-300">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-outside ml-6 space-y-3 mb-6 text-lg text-gray-700 dark:text-gray-300">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="leading-relaxed text-gray-700 dark:text-gray-300 pl-2">
              {children}
            </li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-blue-500 dark:border-blue-400 pl-6 py-3 my-6 bg-blue-50 dark:bg-blue-900/20 rounded-r italic text-gray-700 dark:text-gray-300">
              {children}
            </blockquote>
          ),
          hr: () => (
            <hr className="my-10 border-t-2 border-gray-200 dark:border-gray-700" />
          ),
          table: ({ children }) => (
            <div className="my-8 overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-gray-100 dark:bg-gray-800">{children}</thead>
          ),
          tbody: ({ children }) => (
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {children}
            </tbody>
          ),
          tr: ({ children }) => (
            <tr className="border-b border-gray-300 dark:border-gray-700">
              {children}
            </tr>
          ),
          th: ({ children }) => (
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700">
              {children}
            </td>
          ),

          // @ts-ignore
          code({ inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            const content = String(children);
            const hasLanguage = match && match[1];
            const hasNewlines = content.includes("\n");

            // If inline (single backticks) or no language specification, render as inline code
            if (inline || (!hasLanguage && !hasNewlines)) {
              return (
                <code
                  className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-sm font-mono text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 break-words"
                  {...props}
                >
                  {children}
                </code>
              );
            }

            // If not inline (triple backticks), render as code block
            return (
              <div className="my-6 rounded-lg overflow-x-auto shadow-md dark:shadow-gray-700/50 max-w-full">
                <CopyBlock
                  text={content.replace(/\n$/, "")}
                  language={hasLanguage ? match[1] : ""}
                  showLineNumbers={true}
                  theme={codeTheme}
                  codeBlock
                />
              </div>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}

export default BlogContent;
