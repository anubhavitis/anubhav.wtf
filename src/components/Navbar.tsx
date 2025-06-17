"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { TwitterIcon } from "./ui/twitter";
import { GithubIcon } from "./ui/github";
import { LinkedinIcon } from "./ui/linkedin";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "anubhav.wtf" },
    { href: "/about", label: "About Me" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs", hidden: true },
  ];

  return (
    <div className="flex items-center justify-between gap-4 w-full p-2">
      <div className="flex items-center gap-4">
        {links.map((link) => (
          <Button
            key={link.href}
            variant="link"
            className={`hover:decoration-green-600 hover:decoration-2 pl-0 ${
              pathname === link.href
                ? "underline decoration-green-600 decoration-2"
                : ""
            } ${link.hidden ? "hidden" : ""}`}
          >
            <Link href={link.href}>{link.label}</Link>
          </Button>
        ))}
      </div>
      <div className="flex items-center gap-4">
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
        <ThemeToggle />
      </div>
    </div>
  );
}
