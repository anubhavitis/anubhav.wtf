import { BlogComponent } from "@/components/Blogs";
import { getAllBlogs, getTags } from "@/lib/blogs";

export default async function Blogs() {
  const blogs = await getAllBlogs();
  const allTags = await getTags();

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

      <div className="flex flex-wrap gap-2 mb-10">
        {allTags.map((tag) => (
          <span
            key={tag}
            className="
              text-gray-600 dark:text-gray-400 
              px-2 inline-block rounded-full text-xs 
              shadow-sm dark:shadow-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-col w-full">
        {blogs.map((blog) => (
          <BlogComponent key={blog.slug} {...blog} />
        ))}
      </div>
    </div>
  );
}
