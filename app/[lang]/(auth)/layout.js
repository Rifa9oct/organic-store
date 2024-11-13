import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, params: { lang } }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar lang={lang}  sideBar={false} />
        {children}
        <Footer lang={lang} />
      </body>
    </html>
  );
}
