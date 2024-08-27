import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A Music App",
  description:
    "A place where you and your friends can listen to the same music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
