import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const Font = Poppins({
  weight: ["100", "200", "300", "400"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
});
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Louie WebApp",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Font.className} ${'body'}`}>
          <Navbar />
        <div className="wrapper">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
