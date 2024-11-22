import { SessionProvider } from "next-auth/react";
import "./globals.css";
import AOSProvider from "@/utils/AOSProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <AOSProvider>
            {children}
          </AOSProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
