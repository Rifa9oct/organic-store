import { Merriweather } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({ subsets: ["latin"], weight: ["300", "400", "700", "900"] });

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={merriweather.className}>
        {children}
      </body>
    </html>
  );
}
