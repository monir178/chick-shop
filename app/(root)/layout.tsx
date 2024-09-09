import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chick Shop",
  description: "Chick Shop E-commerce Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <Navbar />
          {children}
          <Toaster position="bottom-center" />
        </ClerkProvider>
      </body>
    </html>
  );
}
