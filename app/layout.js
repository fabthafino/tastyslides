import { Geist, Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100","200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata = {
  title: "Tasty Slides | Cooking Made Easy",
  description: "Your go-to source for recipes and food trends",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} antialiased`}>
          
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
