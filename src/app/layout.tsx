import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digital Store",
  description: "Project e-commerce ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
