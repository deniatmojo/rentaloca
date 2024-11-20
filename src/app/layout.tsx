import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const beautiqueBlack = localFont({
  src: "../../public/fonts/BeautiqueDisplay-Black.otf",
  variable: "--font-beautique-black",
  weight: "100 900",
});
const beautiqueReg = localFont({
  src: "../../public/fonts/BeautiqueDisplay-Regular.otf",
  variable: "--font-beautique-reg",
  weight: "100 900",
});
const beautiqueMed = localFont({
  src: "../../public/fonts/BeautiqueDisplay-Medium.otf",
  variable: "--font-beautique-med",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Rentaloca",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${beautiqueBlack.variable} ${beautiqueReg.variable} ${beautiqueMed.variable} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
