import React from "react";
import { GithubIcon } from "./ui/github";
import { TwitterIcon } from "./ui/twitter";
import { LinkedinIcon } from "./ui/linkedin";

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
      <div className="flex items-center gap-4 mt-12">
        <a href="https://twitter.com/anubhavitis" target="_blank">
          <TwitterIcon size={24} className="text-gray-600 dark:text-gray-400" />
        </a>
        <a href="https://github.com/anubhavitis" target="_blank">
          <GithubIcon size={24} className="text-gray-600 dark:text-gray-400" />
        </a>
        <a href="https://linkedin.com/in/anubhavitis" target="_blank">
          <LinkedinIcon
            size={24}
            className="text-gray-600 dark:text-gray-400"
          />
        </a>
      </div>
    </div>
  );
}
