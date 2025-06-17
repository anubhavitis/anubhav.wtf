"use client";
import Navbar from "@/components/Navbar";
import Inspect from "inspx";

export default function Projects() {
  return (
    <div>
      <Inspect>
        <div className="min-h-screen p-2">
          <div className="max-w-3xl mx-auto px-4">
            <Navbar />
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-gray-600 dark:text-gray-400 mt-12 mb-16">
                Projects
              </h1>
            </div>
          </div>
        </div>
      </Inspect>
    </div>
  );
}
