import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteHeader, SiteFooter } from "@/components";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import MobileNav from "@/components/mobile-nav";

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
        <SidebarProvider defaultOpen={false}>
          <AppSidebar />
          <>
            <main className="flex-1 flex flex-col overflow-x-hidden">
              <SiteHeader />
              {children}
              <SiteFooter />
              <MobileNav />
            </main>
          </>
        </SidebarProvider>
      </body>
    </html>
  );
}
