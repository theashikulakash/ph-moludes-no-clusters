import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PeakSummer",
  description: "Gear up for the heat with PeakSummer. From UV protection to cooling tech, find the best deals on high-quality summer goods and beach essentials.",
  keywords: ["Summer Sale", "Beach Gear", "Sun Protection", "PeakSummer Shop", "Outdoor Essentials"],
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="min-h-[calc(100vh-200px)]">
          {children}
          
        </main>
        <Footer />
        <ToastContainer position="top-right" autoClose={3000} />
      </body>
    </html>
  );
}
