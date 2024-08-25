import { Merriweather } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";

const merriweather = Merriweather({ subsets: ["latin"], weight: ["300", "400", "700", "900"] });

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={merriweather.className}>
        <Navbar sideBar={true} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
