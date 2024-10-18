import localFont from "next/font/local";
import "./globals.css";
import MainLayout from "@/components/MainLayout/MainLayout";

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

export const metadata = {
  title: "NextBLOG",
  description: "NextBLOG, blog website made using NextJS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[url('/images/site/bg.png')] bg-contain bg-no-repeat bg-top bg-center`}
      >
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
