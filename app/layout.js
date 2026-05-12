import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/globals.css";
import "./globals.css";
import FloatingBuy from "@/components/FloatingBuy";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Life Has To Go On : Learning to Breathe Again",
  description:
    "For anyone who smiles in public and stares at the ceiling at night. A book about healing, friendship, and moving forward.",
  openGraph: {
    title: "Life Has To Go On — Abhilash CP",
    description:
      "For anyone who smiles in public and stares at the ceiling at night.",
    url: "https://lifehastogoon.vercel.app",
    siteName: "Life Has To Go On",
    images: [
      {
        url: "https://lifehastogoon.vercel.app/bookcover.png",
        width: 1200,
        height: 630,
        alt: "Life Has To Go On — Abhilash CP",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Life Has To Go On — Abhilash CP",
    description:
      "For anyone who smiles in public and stares at the ceiling at night.",
    images: ["https://lifehastogoon.vercel.app/bookcover.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Navbar />
        {children}
        <FloatingBuy />
        <Footer />
      </body>
    </html>
  );
}
