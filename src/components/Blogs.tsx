type Blog = {
  title: string;
  description: string;
  date: string;
  link: string;
};

const blogs: Blog[] = [
  {
    title: "Understanding React Hooks",
    description:
      "A deep dive into React Hooks and their practical applications",
    date: "Jan-12, 2025",
    link: "https://example.com/react-hooks",
  },
  {
    title: "The Future of Web Development",
    description:
      "Exploring emerging trends and technologies in web development",
    date: "Jan-12, 2025",
    link: "https://example.com/future-web",
  },
  {
    title: "Design Systems at Scale",
    description:
      "Building and maintaining design systems for large organizations",
    date: "Jan-12, 2025",
    link: "https://example.com/design-systems",
  },
];

export default function Blogs() {
  return (
    <div className="flex flex-col gap-4 w-fit">
      {blogs.map((blog) => (
        <Blog key={blog.title} {...blog} />
      ))}
    </div>
  );
}

function Blog({ title, description, date, link }: Blog) {
  return (
    <div className="py-2 group rounded transition-colors w-full">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="flex flex-col">
          <div className="text-xl font-bold transition-colors group-hover:underline group-hover:decoration-green-600 group-hover:decoration-2 group-hover:underline-offset-4">
            {title}
          </div>
          {/* <div className="text-sm "> {description} </div> */}
          <div className="text-sm dark:text-gray-300 text-gray-500 ">
            {" "}
            {date}{" "}
          </div>
        </div>
      </a>
    </div>
  );
}
