import { BlogPost } from "@/lib/blogs";
import Link from "next/link";

export function BlogComponent({ date, title, link }: BlogPost) {
  return (
    <div className="group rounded transition-colors w-full">
      <Link href={link} rel="noopener noreferrer">
        <div className="flex group flex-col justify-between md:flex-row my-2 gap-x-5 gap-y-2">
          <div
            className="
            w-full md:w-1/5 flex flex-col md:flex-row
            md:text-right md:mr-2 
            justify-start items-start md:justify-end md:items-right"
          >
            <h1 className="text-gray-600 dark:text-gray-400 text-md">
              {date.toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </h1>
          </div>
          <div className="w-full md:w-4/5 md:ml-2">
            <div className="text-lg font-semibold transition-colors group-hover:underline group-hover:decoration-green-600 group-hover:decoration-2 group-hover:underline-offset-4">
              {title}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
