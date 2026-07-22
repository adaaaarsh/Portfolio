import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adarsh Lal Anilal | Industrial Engineer Portfolio",
  description:
    "Industrial Engineer with an MS from UTA and Six Sigma Green Belt. Experienced in manufacturing systems, process optimization, Lean Six Sigma, and AI-powered manufacturing tools.",
  keywords: [
    "Industrial Engineer",
    "Manufacturing Engineer",
    "Process Engineer",
    "Six Sigma Green Belt",
    "Lean Manufacturing",
    "UTA",
  ],
  openGraph: {
    title: "Adarsh Lal Anilal | Industrial Engineer Portfolio",
    description:
      "Industrial Engineer with expertise in Lean Manufacturing, Six Sigma, simulation modeling, and AI-powered manufacturing tools.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/favicon.svg`} type="image/svg+xml" />
      </head>
      <body className="noise-bg">{children}</body>
    </html>
  );
}
