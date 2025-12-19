import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "The Xiao Studio",
  description: "Online & in-person yoga studio by Xiao Ye.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={poppins.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#F5F1ED] text-[#3A3A3A]`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
