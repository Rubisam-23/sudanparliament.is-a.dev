import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sudanese Professionals Parliament (SPP)",
  description: "Drafting the Future of Sudan — a professional body dedicated to democratic governance, policy development, and national dialogue.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
