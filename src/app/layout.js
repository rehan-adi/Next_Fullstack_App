import { Anek_Malayalam } from "next/font/google";
import "./globals.css";
import Navbar from '@/app/Navbar/page'
import Footer from '@/app/Footer/page'

const Font  = Anek_Malayalam ({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Font.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
