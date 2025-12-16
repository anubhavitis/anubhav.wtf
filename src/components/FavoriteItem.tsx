import React from "react";

interface FavoriteArticleProps {
  title: string;
  author: string;
  url: string;
  description: string;
}

export function FavoriteArticleItem({
  title,
  author,
  url,
  description,
}: FavoriteArticleProps) {
  return (
    <div className="block group hover:opacity-80 p-3 -mx-3 rounded-lg transition-opacity">
      <div className="flex-1 min-w-0">
        <h3 className="text-base font-medium">
          <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
        </h3>
        <p className="text-sm opacity-60 mt-1">
          by {author}
        </p>
        <p className="text-sm opacity-60 mt-1">
          {description}
        </p>
      </div>
    </div>
  );
}

interface FavoriteBookProps {
  title: string;
  author: string;
  year: string;
  description: string;
}

export function FavoriteBookItem({
  title,
  author,
  year,
  description,
}: FavoriteBookProps) {
  return (
    <div className="block group hover:opacity-80 p-3 -mx-3 rounded-lg transition-opacity">
      <div className="flex-1 min-w-0">
        <h3 className="text-base font-medium">
          {title}
        </h3>
        <p className="text-sm opacity-60 mt-1">
          by {author} ({year})
        </p>
        <p className="text-sm opacity-60 mt-1">
          {description}
        </p>
      </div>
    </div>
  );
}
