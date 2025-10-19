// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Enova OS Panel",
  description: "Minimal Next.js + Tailwind starter",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export const viewport: Viewport = {
  themeColor: "#0ea5e9",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + " antialiased bg-gray-50 text-gray-900"}>
        {children}
      </body>
    </html>
  );
}
