import React from "react";

function Footer() {
  return (
    <div className="relative bottom-0 flex items-center justify-center py-4 w-full">
      <div className="text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Anubhav Singhal. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
