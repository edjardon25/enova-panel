import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Enova OS Panel",
  description: "Minimal Next.js + Tailwind starter",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
