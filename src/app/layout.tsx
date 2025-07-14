// import React from "react";
import { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "../app/components/navbar";
import Footer from '../app/components/footer';
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Lloyd Nim | Full Stack Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />  
        {children}
        <Footer/>
      </body>
    </html>
  );
}
