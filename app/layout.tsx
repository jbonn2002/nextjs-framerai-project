import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={instrumentSerif.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
