"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="container mx-auto">
      <div className="mb-20 flex items-center justify-between">
        {/* Name */}
        <div className="text-xl font-bold">
          <Link href="/" className="no-underline hover:no-underline">
            anubhav singhal
          </Link>
        </div>
      </div>
    </div>
  );
}
