"use client";
import "./globals.css";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
// import Inspect from "inspx";
import { ThemeProvider } from "next-themes";
import { Montserrat, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";

const Inspect = dynamic(() => import("inspx"), { ssr: false });

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Anubhav Singhal</title>
        <meta name="description" content="Anubhav Singhal's Blog" />
      </head>
      <body
        className={`${montserrat.variable} ${geistMono.variable} antialiased`}
      >
        <Inspect disabled={false}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col justify-between min-h-screen max-w-3xl mx-auto py-2 px-8 md:px-2 ">
              <Navbar />
              <div className="flex-1">{children}</div>
              <Footer />
            </div>
          </ThemeProvider>
        </Inspect>
      </body>
    </html>
  );
}
