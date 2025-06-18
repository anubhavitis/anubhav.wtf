"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "anubhav.wtf" },
    { href: "/about", label: "About Me" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs", hidden: true },
  ];

  return (
    <div className="relative top-0 flex items-center justify-between gap-4 w-full py-2">
      <div className="flex items-center gap-2 md:gap-4">
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
      <ThemeToggle />
    </div>
  );
}
