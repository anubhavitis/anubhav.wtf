"use client";

import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("anubhavitis@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col mb-24">
      <div className="space-y-5">
        <p className="text-base leading-relaxed">
          I am active on twitter and my email. However, the best way to reach
          out would be introduction via someone I know.
        </p>
        <div className="flex gap-6 text-base">
          <a
            href="https://twitter.com/anubhavitis"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter
          </a>
          <div className="flex items-center gap-2">
            <a href="mailto:anubhavitis@gmail.com">anubhavitis@gmail.com</a>
            <button
              onClick={copyEmail}
              className="opacity-60 hover:opacity-100"
              title={copied ? "Copied!" : "Copy email"}
            >
              {copied ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              ) : (x
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
