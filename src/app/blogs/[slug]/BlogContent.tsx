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
}

export function BlogContent({ content, title, date, tags }: BlogContentProps) {
  const { theme } = useTheme();
  const [codeTheme, setCodeTheme] = useState<Theme>({
    mode: theme as ThemeModes,
  });

  useEffect(() => {
    setCodeTheme({ mode: theme as ThemeModes });
    console.log(content, tags);
  }, [theme]);

  return (
    <article className="prose dark:prose-invert max-w-3xl mx-auto py-8 my-16">
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
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 mt-12">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-4">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-3">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
              {children}
            </p>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-gray-900 dark:text-gray-100">
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="italic text-gray-900 dark:text-gray-100">
              {children}
            </em>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-gray-700 dark:text-gray-300">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside space-y-2 mb-6 text-lg text-gray-700 dark:text-gray-300">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="ml-4 text-gray-700 dark:text-gray-300">
              {children}
            </li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-blue-50 dark:bg-blue-900/20 rounded-r">
              {children}
            </blockquote>
          ),
          hr: () => (
            <hr className="my-8 border-gray-300 dark:border-gray-600" />
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
                  className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm"
                  {...props}
                >
                  {children}
                </code>
              );
            }

            // If not inline (triple backticks), render as code block
            return (
              <CopyBlock
                text={content.replace(/\n$/, "")}
                language={hasLanguage ? match[1] : ""}
                showLineNumbers={true}
                theme={codeTheme}
                codeBlock
              />
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
