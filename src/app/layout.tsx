import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "../../components/Footer";
import Container from "../../components/container";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "App-X",
  description: "By Ajay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Container>
          {children}
        </Container>
        
        <Footer />
      </body>
    </html>
  );
}
