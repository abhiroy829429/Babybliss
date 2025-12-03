import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "BabyBliss - Baby Products Store",
  description: "A mini demo PWA e-commerce experience for baby products.",
  themeColor: "#ff8fb1",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


