"use client";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("./navbar"), { ssr: false });
export default function HeaderClientWrapper() {
  return <Header />;
}
