import { BlogPost } from "@/lib/blogs";
import Link from "next/link";

export function BlogComponent({ date, title, tags, link }: BlogPost) {
  return (
    <div className=" rounded transition-colors w-full">
      <div className="flex flex-col justify-between my-4 gap-x-5 gap-y-2">
        <div className="w-full">
          <Link href={link} rel="noopener noreferrer">
            <div className="text-lg font-semibold transition-colors hover:underline hover:decoration-green-600 hover:decoration-2 hover:underline-offset-4">
              {title}
            </div>
          </Link>
        </div>
        <div className="text-gray-500 dark:text-gray-400 text-sm w-full flex gap-2 justify-start items-start">
          <h1 className="pr-2 border-r-2 border-gray-400 dark:border-gray-600">
            {date.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}{" "}
          </h1>
          <div className="flex gap-2">
            {tags.map((tag, index) => {
              return (
                <>
                  <Link href={`/blogs?tag=${tag}`} key={tag}>
                    <span className="hover:text-black hover:dark:text-white transition-colors hover:underline hover:decoration-green-600 hover:decoration hover:underline-offset-2">
                      {tag}
                    </span>
                  </Link>
                  {index !== tags.length - 1 && ","}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
