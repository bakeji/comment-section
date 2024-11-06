import type { Metadata } from "next";
import "./globals.css";
import {Rubik} from "next/font/google";

const rubik = Rubik({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: [ "400", "500", "700"],
})

export const metadata: Metadata = {
  title: "Interactive comment section",
  description: "comment section for frontend mentor challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={rubik.className}
      >
        {children}
      </body>
    </html>
  );
}
