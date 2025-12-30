"use client";
import "./globals.css";
import dynamic from "next/dynamic";
import Script from "next/script";
// import Inspect from "inspx";
import { ThemeProvider } from "next-themes";
import { Raleway, Geist_Mono } from "next/font/google";

const Inspect = dynamic(() => import("inspx"), { ssr: false });

const raleway = Raleway({
  variable: "--font-raleway",
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WZ3C71TLCP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WZ3C71TLCP');
          `}
        </Script>
      </head>
      <body className={`${raleway.variable} ${geistMono.variable} antialiased`}>
        <Inspect disabled={false}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col justify-center items-center min-h-screen max-w-xl mx-auto my-auto p-2">
              <div>{children}</div>
            </div>
          </ThemeProvider>
        </Inspect>
      </body>
    </html>
  );
}
