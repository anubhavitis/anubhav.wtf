"use client";
import Navbar from "@/components/Navbar";
import Inspect from "inspx";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <Inspect>
        <div className="min-h-screen p-2">
          <div className="max-w-3xl mx-auto px-4">
            <Navbar />
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-gray-600 dark:text-gray-400 mt-12 mb-16">
                About Me
              </h1>
              <Image
                src="/avatar.png"
                alt="Anubhav Singhal"
                width={200}
                height={200}
                className="border-3 border-gray-300 dark:border-gray-700 rounded-lg mb-16"
              />
              <div className="text-2xl font-bold">I am Anubhav Singhal</div>
            </div>
          </div>
        </div>
      </Inspect>
    </div>
  );
}
