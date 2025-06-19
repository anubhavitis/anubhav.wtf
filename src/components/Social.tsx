import React from "react";
import { TwitterIcon } from "./ui/twitter";
import { GithubIcon } from "./ui/github";
import { MailIcon } from "lucide-react";
import { LinkedinIcon } from "./ui/linkedin";

function Social() {
  return (
    <div className="flex items-center gap-4 mt-12">
      <a href="https://twitter.com/anubhavitis" target="_blank">
        <TwitterIcon
          size={24}
          className="text-gray-600 dark:text-gray-400 mx-1"
        />
      </a>
      <a href="mailto:anubhavitis@gmail.com" target="_blank">
        <MailIcon
          size={24}
          className="text-gray-600 dark:text-gray-400 mx-1 hover:scale-120 transition-all duration-300"
        />
      </a>
      <a href="https://github.com/anubhavitis" target="_blank">
        <GithubIcon
          size={24}
          className="text-gray-600 dark:text-gray-400 mx-1"
        />
      </a>
      <a href="https://linkedin.com/in/anubhavitis" target="_blank">
        <LinkedinIcon
          size={24}
          className="text-gray-600 dark:text-gray-400 mx-1"
        />
      </a>
    </div>
  );
}

export default Social;
