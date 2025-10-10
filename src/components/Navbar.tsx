"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { ThemeSwitcher } from "./ui/shadcn-io/theme-switcher";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const pathname = usePathname().split("/")[1];
  const isHome = pathname === "";

  const links = [
    { href: "/about", label: "about" },
    { href: "/work", label: "work" },
    { href: "/blogs", label: "blogs" },
  ];

  return (
    <div className="relative top-0 container mx-auto">
      <div
        className={`flex ${
          isHome ? "flex-col gap-4" : "flex-row items-center justify-between"
        } transition-all duration-1000 ease-in-out`}
      >
        {/* Hero Title */}
        <div
          className={`font-bold transition-all duration-500 ease-in-out ${
            isHome ? "text-6xl" : "text-xl"
          }`}
        >
          <Link href="/">anubhav singhal</Link>
        </div>

        {/* Navigation Links - Only show on home page */}
        {isHome && (
          <div className="flex items-center gap-2 md:gap-6 animate-in fade-in slide-in-from-top-4 duration-700">
            {links.map((link) => (
              <Button
                key={link.href}
                variant="link"
                className={`hover:decoration-green-600 hover:decoration-2 px-0 py-0 transition-all duration-300 ${
                  pathname === link.href.split("/")[1]
                    ? "underline decoration-green-600 decoration-2"
                    : ""
                }`}
              >
                <Link className="p-0" href={link.href}>
                  <p className="text-sm">{link.label}</p>
                </Link>
              </Button>
            ))}
            <ThemeSwitcher
              value={theme as "light" | "dark" | "system"}
              onChange={(value) =>
                setTheme(value as "light" | "dark" | "system")
              }
              className="scale-75 hover:scale-100 transition-all duration-300"
            />
          </div>
        )}

        {/* Theme Switcher - Only show on non-home pages */}
        {!isHome && (
          <ThemeSwitcher
            value={theme as "light" | "dark" | "system"}
            onChange={(value) => setTheme(value as "light" | "dark" | "system")}
            className="scale-75 hover:scale-100 transition-all duration-300"
          />
        )}
      </div>
    </div>
  );
}
