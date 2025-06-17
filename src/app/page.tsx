"use client";

import Blogs from "@/components/Blogs";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import Inspect from "inspx";

export default function Home() {
  return (
    <div>
      <Inspect>
        <div className="min-h-screen transition-colors duration-300 p-2">
          <div className="max-w-3xl mx-auto px-4">
            <Navbar />
            <Landing />
            <Blogs />
          </div>
        </div>
      </Inspect>
    </div>
  );
}
