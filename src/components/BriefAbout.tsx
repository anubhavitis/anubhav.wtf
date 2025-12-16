import React from "react";
import Link from "next/link";

export default function BriefAbout() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12">
      <div className="space-y-2">
        <h2 className="text-lg sm:text-xl font-semibold">
          About
        </h2>
        <p className="text-sm leading-relaxed">
          Software engineer passionate about building delightful user
          experiences and exploring the intersection of technology and design.
        </p>
        <Link href="/about" className="text-sm inline-block">
          Read more →
        </Link>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg sm:text-xl font-semibold">
          Work
        </h2>
        <p className="text-sm leading-relaxed">
          Currently working on web3 infrastructure and developer tools. Check
          out my projects and experience.
        </p>
        <Link href="/work" className="text-sm inline-block">
          View work →
        </Link>
      </div>
    </div>
  );
}
