import Landing from "@/components/Landing";
import Recent from "@/components/Recent";
import InspectWrapper from "@/components/InspectWrapper";
import { getAllBlogs } from "@/lib/blogs";

export default async function Home() {
  const blogs = await getAllBlogs();

  return (
    <InspectWrapper>
      <div className="flex-1 flex-col justify-between">
        <Landing />
        <div className="h-px bg-gray-200 dark:bg-gray-800 w-full my-8" />
        <Recent blogs={blogs} />
      </div>
    </InspectWrapper>
  );
}
