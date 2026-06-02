import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const josefin = Josefin_Sans({
  subsets: ["latin"],
});


export const metadata = {
  title: "Vibe Trek",
  description: "Vibe Trek Tours and Travels",
  icons: {
    icon: "/favicon.svg" 
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${josefin.className} text-black bg-white h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}

        <Footer/>

        <Toaster />
      </body>
    </html>
  );
}
