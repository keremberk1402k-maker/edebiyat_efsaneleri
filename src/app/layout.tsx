import type { Metadata } from "next";
import { Black_Ops_One, Exo_2 } from "next/font/google";
import "./globals.css";

const blackOps = Black_Ops_One({ weight: "400", subsets: ["latin"], variable: "--font-head" });
const exo2 = Exo_2({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Edebiyat Efsaneleri",
  description: "Bilgi Sınavı Oyunu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${blackOps.variable} ${exo2.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}