"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { ThemeSwitcher } from "./ui/shadcn-io/theme-switcher";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname().split("/")[1];

  const links = [
    { href: "/about", label: "about" },
    { href: "/work", label: "work" },
    { href: "/blogs", label: "blogs" },
  ];

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between">
        {/* Name */}
        <div className="text-xl font-bold text-gray-700 dark:text-gray-300">
          <Link href="/">anubhav singhal</Link>
        </div>

        {/* Navigation Links & Theme Switcher */}
        <div className="flex items-center gap-4 md:gap-6">
          {links.map((link) => (
            <Button
              key={link.href}
              variant="link"
              className={`px-0 ${
                pathname === link.href.split("/")[1]
                  ? "underline decoration-green-600 decoration-2"
                  : ""
              }`}
            >
              <Link href={link.href}>
                <span className="text-sm">{link.label}</span>
              </Link>
            </Button>
          ))}
          <ThemeSwitcher
            value={theme as "light" | "dark" | "system"}
            onChange={(value) => setTheme(value as "light" | "dark" | "system")}
          />
        </div>
      </div>
    </div>
  );
}
