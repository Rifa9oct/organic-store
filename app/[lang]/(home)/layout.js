import { Merriweather } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";

const merriweather = Merriweather({ subsets: ["latin"], weight: ["300", "400", "700", "900"] });

export default function RootLayout({ children, params: { lang } }) {

  return (
    <html lang="en">
      <body className={merriweather.className}>
        <Navbar lang={lang} sideBar={true} />
        {children}
        <Footer lang={lang} />
      </body>
    </html>
  );
}
