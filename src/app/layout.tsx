import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import SplashCursor from "@/components/ui/SplashCursor";
import Navbar from "@/components/section/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "PPT Litbang ITC 2025",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.className || "font-sans"} dark:bg-black bg-white overflow-x-hidden`}>
        <Navbar />
        <Theme>{children}</Theme>
        <SplashCursor />
      </body>
    </html>
  );
}
