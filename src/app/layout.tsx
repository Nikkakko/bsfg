import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "BSFG - Casino",
  description: "BSFG - Casino",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          poppins.variable,
          "antialiased bg-background min-h-screen flex flex-col scroll-smooth"
        )}
      >
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
