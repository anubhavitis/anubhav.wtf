import React from "react";

export default function Content({
  head,
  body,
}: {
  head: string;
  body: string[];
  isLink?: boolean;
  link?: string;
}) {
  return (
    <div className="flex flex-col justify-between md:flex-row my-6 gap-x-5 gap-y-2">
      <div className="w-full md:w-1/5 md:text-right md:mr-2">
        <h1 className="text-gray-600 dark:text-gray-400 text-lg">{head}</h1>
      </div>
      <div className="w-full md:w-4/5 md:ml-2">
        {typeof body === "string" ? (
          <li>{body}</li>
        ) : (
          <ul className="list-disc space-y-1 text-sm pl-4">
            {body.map((item) => (
              <li key={item} className="pl-2">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
