import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Waleed Amazon Consultant - Amazon Virtual Assistant Services",
  description:
    "Professional Amazon VA services helping sellers optimize listings, manage PPC, and scale their stores.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Waleed Amazon Consultant - Amazon Virtual Assistant Services",
    description:
      "Professional Amazon VA services helping sellers optimize listings, manage PPC, and scale their stores.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Waleed Amazon Consultant - Amazon Virtual Assistant Services",
    description:
      "Professional Amazon VA services helping sellers optimize listings, manage PPC, and scale their stores.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
