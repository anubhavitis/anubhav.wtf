import React from "react";
import Social from "./Social";

export default function Landing() {
  return (
    <div className="flex flex-col mt-12 py-2 gap-2">
      <div className="text-2xl font-bold">👋 Hi</div>
      <div className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
        I am{" "}
        <a
          href="/about"
          className="hover:underline decoration-2 transition-colors duration-200 decoration-green-600 underline-offset-4"
        >
          Anubhav Singhal
        </a>
        . Welcome to my corner of the internet.
      </div>
      <div className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
        You'll often find me reading random books, going on long walks,
        exploring maths and physics, or cooking comfort food.
      </div>
      <Social />
    </div>
  );
}
