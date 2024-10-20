import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Oswald } from "next/font/google";

const openSans = Oswald({
  subsets: ["latin"],
  display: "swap",
  //👇 Add variable to our object
  variable: "--font-oswald",
});

export const metadata = {
  title: "Mukul's Portfolio",
  description: "I showcase my work here.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
