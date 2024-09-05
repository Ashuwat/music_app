import "server-only";
import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import LoadingGlobal from "./loading";

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
      <Suspense fallback={<LoadingGlobal />}>
        <body style={{ margin: "0px" }}>{children}</body>
      </Suspense>
    </html>
  );
}
