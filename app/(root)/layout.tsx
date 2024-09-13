import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

          <div className="min-h-screen">{children}</div>
          <Toaster position="bottom-center" />
          <Footer />
        </ClerkProvider>
      </body>
    </html>
  );
}

export const dynamic = "force-dynamic";
