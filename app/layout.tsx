import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sean Hoe | Building on the Future of Finance",
  description: "Portfolio of Sean Hoe - Building on the future of finance through Payments, DeFi, Software, and Fintech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}