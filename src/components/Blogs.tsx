import Link from "next/link";

export type Blog = {
  title: string;
  description: string;
  date: Date;
  link: string;
};

export function BlogComponent({ date, title, description, link }: Blog) {
  return (
    <div className="group rounded transition-colors w-full">
      <Link href={link} rel="noopener noreferrer">
        <div className="flex group flex-col justify-between md:flex-row my-6 gap-x-5 gap-y-2">
          <div className="w-full md:w-1/5 md:text-right md:mr-2 flex flex-col md:flex-row justify-start items-start md:justify-center md:items-center">
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
            {description && (
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {description}
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
