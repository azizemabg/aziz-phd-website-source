import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Azize M. Abg - Plant & Animal Breeding Researcher",
  description: "Master of Integrated Plant and Animal Breeding, Master of Animal Breeding and Genetics. Research in quantitative genetics, plant breeding, and animal genetics.",
  keywords: ["Azize M. Abg", "Plant Breeding", "Animal Genetics", "Quantitative Genetics", "PhD Research", "Breeding Sciences"],
  authors: [{ name: "Azize M. Abg" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Azize M. Abg - Plant & Animal Breeding Researcher",
    description: "Advanced research in integrated plant and animal breeding methodologies",
    url: "https://azizemabg.github.io",
    siteName: "Azize M. Abg",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Azize M. Abg - Plant & Animal Breeding Researcher",
    description: "Advanced research in integrated plant and animal breeding methodologies",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
