
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar/page";
import Myprofilepic from "./myprofilepic/page";
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children
}) {
  return (
    <div className="grid content-start">

      <Navbar />
      <body className={inter.className}>{children}</body>

    </div>
  );
}
