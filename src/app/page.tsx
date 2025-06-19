"use client";

import Landing from "@/components/Landing";
import Recent from "@/components/Recent";
import Inspect from "inspx";

export default function Home() {
  return (
    <Inspect>
      <div className="flex-1 flex-col justify-between">
        <Landing />
        <div className="h-px bg-gray-200 dark:bg-gray-800 w-full my-8" />
        <Recent />
      </div>
    </Inspect>
  );
}
