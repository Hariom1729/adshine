import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adshinepharma.com"),
  title: "Adshine Pharmaceuticals | Creating Healthy Lives",
  description:
    "Adshine Pharmaceuticals delivers GMP-certified, science-backed medicines across General Physician and Gynecology specialties across India.",
  keywords: ["Pharmaceuticals", "Adshine", "Adshine Pharmaceuticals", "GMP Certified", "Healthcare India", "Medicine", "Clinical Care", "Gynecology", "Orthopedics"],
  openGraph: {
    title: "Adshine Pharmaceuticals | Creating Healthy Lives",
    description: "Adshine Pharmaceuticals delivers GMP-certified, science-backed medicines across India.",
    url: "https://adshinepharma.com",
    siteName: "Adshine Pharmaceuticals",
    images: [
      {
        url: "/logo adshine.jpeg",
        width: 1200,
        height: 630,
        alt: "Adshine Pharmaceuticals Logo"
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/logo adshine.jpeg",
    apple: "/logo adshine.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${dmSans.variable} antialiased bg-white`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
