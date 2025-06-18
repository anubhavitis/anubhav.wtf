"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Inspect from "inspx";
import { ThemeProvider } from "next-themes";
import React from "react";

function Child({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Inspect>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <div className="flex flex-col justify-between min-h-screen max-w-3xl mx-auto p-2">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </ThemeProvider>
    </Inspect>
  );
}

export default Child;
