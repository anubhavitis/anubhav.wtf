"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between gap-4 w-full">
      <div className="flex items-center gap-4">
        <Button
          variant="link"
          className=" hover:decoration-green-600 hover:decoration-2"
        >
          <Link href="/"> anubhav.wtf </Link>
        </Button>
        <Button
          variant="link"
          className=" hover:decoration-green-600 hover:decoration-2"
        >
          About
        </Button>
        <Button
          variant="link"
          className=" hover:decoration-green-600 hover:decoration-2"
        >
          Projects
        </Button>
        <Button
          variant="link"
          className=" hover:decoration-green-600 hover:decoration-2"
        >
          Blogs
        </Button>
      </div>
      <ThemeToggle />
    </div>
  );
}
