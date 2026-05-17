import type { Metadata } from "next";
import { Noto_Serif_TC } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif_TC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "WKY — Wei-Yuan (Ken) | 謙山敘事",
  description: "以鏡頭觀察世界，以雙手建造空間，以文字記錄思想。探索個人創作與建築教育的跨界可能。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className={`${notoSerif.variable}`}>
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}