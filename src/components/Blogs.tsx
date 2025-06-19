import Link from "next/link";

type Blog = {
  title: string;
  description: string;
  date: Date;
  link: string;
};

const blogs: Blog[] = [
  {
    title: "Getting started with Asynchronous programming",
    description:
      "A quick introduction to Asynchronous programming and its practical applications",
    date: new Date("June 10, 2021"),
    link: "/blogs/getting-started-with-async-programming",
  },
  {
    title: "Microservices Architecture: What, Where & Why?",
    description:
      "A deep dive into Microservices Architecture, its benefits, and how it can be implemented in a project",
    date: new Date("August 22, 2022"),
    link: "/blogs/microservices-architecture-what-where-why",
  },
  {
    title: "Push vs Pull API Architecture",
    description:
      "A comparison of Push and Pull API Architecture and their use cases",
    date: new Date("August 2, 2022"),
    link: "/blogs/push-vs-pull-api-architecture",
  },
  {
    title: "What exactly is API?",
    description: "A deep dive into what API is and how it works, with examples",
    date: new Date("January 13, 2021"),
    link: "/blogs/what-exactly-is-api",
  },
  {
    title: "Why Decentralised Web is a necessity?",
    description:
      "A deep dive into why Decentralised Web is a necessity and how it can be achieved",
    date: new Date("June 29, 2021"),
    link: "/blogs/why-decentralised-web-is-a-necessity",
  },
];

export default function Blogs() {
  return (
    <div className="flex flex-col gap-4 w-fit">
      {blogs
        .sort((a, b) => b.date.getTime() - a.date.getTime())
        .map((blog) => (
          <Blog key={blog.title} {...blog} />
        ))}
    </div>
  );
}

function Blog({
  date,
  title,
  description,
  link,
}: {
  date: Date;
  title: string;
  description?: string;
  link: string;
}) {
  return (
    <div className="py-2 group rounded transition-colors w-full">
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
            <div className="text-xl font-semibold transition-colors group-hover:underline group-hover:decoration-green-600 group-hover:decoration-2 group-hover:underline-offset-4">
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
