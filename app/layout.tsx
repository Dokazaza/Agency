import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import {FloatingNav} from "@/components/FloatingNavBar";
import {navItems} from "@/constants";
import FloatingCalendly from "@/components/FloatingCalendly";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dokaza Web. Agency",
  description: "Helps your business digitally",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white">
      <header>
        <NavBar />
          <FloatingNav navItems={navItems} />
      </header>
      <main className="bg-white">
        {children}
          <FloatingCalendly />
      </main>
      <footer className="bg-white">
        <Footer />
      </footer>
      </body>
    </html>
  );
}
