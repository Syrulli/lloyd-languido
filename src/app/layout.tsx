import { Metadata } from "next";
import localFont from "next/font/local";
import HeaderClientWrapper from "../app/components/HeaderClientWrapper";
import Footer from "../app/components/footer";
import Chatbot from "../app/components/Chatbot";
import LoadingWrapper from "../app/components/box/LoadingScreen";
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
  title: "Lloyd Languido | Full Stack Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LoadingWrapper>
          <HeaderClientWrapper />
          {children}
          <Chatbot />
          <Footer />
        </LoadingWrapper>
      </body>
    </html>
  );
}
