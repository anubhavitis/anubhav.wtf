import { BlogComponent } from "@/components/Blogs";
import { getAllBlogs } from "@/lib/blogs";

export default async function Blogs() {
  const blogs = await getAllBlogs();

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
        {blogs.map((blog) => (
          <BlogComponent
            key={blog.slug}
            title={blog.title}
            description={blog.description}
            date={blog.date}
            link={blog.link}
          />
        ))}
      </div>
    </div>
  );
}
