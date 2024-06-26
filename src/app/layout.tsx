import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from '@clerk/nextjs'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ideateit",
  description: "From Idea to Customer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">

      <body className={cn(inter.className,"text-[#E4E4E4] bg-gradient-to-b from-[#243C52] to-[#0A0C0E] bg-fixed")}>
      <div className="fixed inset-0 -z-20 opacity-5 h-full w-full bg-transparent bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      {children}
        </body>
    </html>
    </ClerkProvider>
  );
}
