import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "../../components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Gyoza",
 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Image
          layout="fill"
          className="absoulte opacity-30 -z-10"
          alt="momo"
          src="/momo.jpeg"
        />
        <Navbar/>
        {children}
      </body>
    </html>
  );
}

