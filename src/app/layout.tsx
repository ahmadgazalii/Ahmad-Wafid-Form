import type { Metadata } from "next";
import { Inter, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Navbar from "./comPonents/Navbar";

const roboto = Roboto_Slab({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Wafid Appoinment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        
      <Navbar />

        {children}
        
        </body>
    </html>
  );
}
