"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname().split("/")[1];

  const links = [
    { href: "/", label: "anubhav.wtf" },
    { href: "/about", label: "About Me" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
  ];

  return (
    <div className="relative top-0 flex items-center justify-between gap-4 w-full py-2">
      <div className="flex items-center gap-2 md:gap-6">
        {links.map((link) => (
          <Button
            key={link.href}
            variant="link"
            className={`hover:decoration-green-600 hover:decoration-2 px-0 ${
              pathname === link.href.split("/")[1]
                ? "underline decoration-green-600 decoration-2"
                : ""
            }`}
          >
            <Link href={link.href}>{link.label}</Link>
          </Button>
        ))}
      </div>
      <ThemeToggle />
    </div>
  );
}
