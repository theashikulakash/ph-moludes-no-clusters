import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const josefin = Josefin_Sans({
  subsets: ["latin"],
});


export const metadata = {
  title: "Vibe Trek",
  description: "Tours and Travel booking for your comfort and wishing you a vibing weekend",
  icons: {
    icon: "/favicon.svg",
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${josefin.className} bg-white h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}

        <Footer/>
        <ToastContainer 
          position="bottom-right" 
          autoClose={3000} 
          theme="colored" 
        />
      </body>
    </html>
  );
}
