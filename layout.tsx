import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shivangi Chaurasiya | Aspiring Data Analyst",
  description:
    "Portfolio of Shivangi Chaurasiya — Aspiring Data Analyst skilled in Excel, SQL, and data-driven decision making.",
  keywords: ["data analyst", "portfolio", "SQL", "Excel", "Shivangi Chaurasiya"],
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#06141B] text-[#CCD0CF] antialiased">
        {children}
      </body>
    </html>
  );
}
