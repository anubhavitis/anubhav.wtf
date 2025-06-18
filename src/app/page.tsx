"use client";

import Blogs from "@/components/Blogs";
import Landing from "@/components/Landing";
import Inspect from "inspx";

export default function Home() {
  return (
    <Inspect>
      <div className="h-full">
        <div className="flex flex-col justify-between">
          <div className="">
            <Landing />
            <div className="h-px bg-gray-200 dark:bg-gray-800 w-full my-8" />
            <Blogs />
          </div>
        </div>
      </div>
    </Inspect>
  );
}
