import { BlogPost } from "@/lib/blogs";
import Link from "next/link";

export function BlogComponent({ date, title, tags, link }: BlogPost) {
  return (
    <div className=" rounded transition-colors w-full">
      <div className="flex flex-col justify-between my-4 gap-x-5 gap-y-2">
        <div className="w-full">
          <Link href={link} className="text-md font-semibold">
            {title}
          </Link>
        </div>
        <div className="text-sm w-full flex gap-2 justify-start items-start opacity-60">
          <h1 className="pr-2 border-r-2">
            {date.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}{" "}
          </h1>
          <div className="flex gap-2">
            {tags.map((tag, index) => {
              return (
                <div key={tag}>
                  <Link href={`/blogs?tag=${tag}`}>{tag}</Link>
                  {index !== tags.length - 1 && ","}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
