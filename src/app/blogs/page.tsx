import { Blog, BlogComponent } from "@/components/Blogs";
import Content from "@/components/Content";

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
    <div className="flex flex-col my-16">
      <div className="flex flex-col gap-2 mb-10">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          I write about stuff I learn
        </h1>
        <p>
          Ser Feynman says, if you can't explain it simply, you don't know it
          well enough. So here is my attempt to explain stuff I learn.
        </p>
      </div>
      <div className="flex flex-col gap-2 w-fit">
        {blogs
          .sort((a, b) => b.date.getTime() - a.date.getTime())
          .map((blog) => (
            <BlogComponent key={blog.title} {...blog} />
          ))}
      </div>
    </div>
  );
}
