import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "R N B P & Co. | Chartered Accountants",
  description:
    "R N B P & Co. Chartered Accountants – Trusted financial advisors providing expert services in Taxation, Audit, GST, and Business Advisory.",
  keywords:
    "chartered accountants, CA firm, taxation, audit, GST, financial advisory, RNBP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
