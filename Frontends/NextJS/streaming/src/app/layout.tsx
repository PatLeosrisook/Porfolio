import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import './CSS/style.css'
import Menu from "@/Component/Menu";
const inter = Inter({ subsets: ["latin"] });
import ReduxProvider from "@/Component/Provider";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
