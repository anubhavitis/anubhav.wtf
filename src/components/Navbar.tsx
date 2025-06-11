"use client";

import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between gap-4 w-full">
      <div className="flex items-center gap-4">
        <Button variant="ghost"> About </Button>
        <Button variant="ghost"> Projects </Button>
        <Button variant="ghost"> Blogs </Button>
      </div>
      <ThemeToggle />
    </div>
  );
}
