import React from "react";

function Footer() {
  return (
    <div
      className="text-center text-sm text-gray-500 dark:text-gray-400 relative bottom-0 
    flex-col items-center justify-center py-4 w-full"
    >
      <div>Press Option ⌥ key and inspect any element.</div>
      <div>
        &copy; {new Date().getFullYear()} Anubhav Singhal. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
