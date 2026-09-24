import './globals.css'
import Navbar from "@/components/layouts/Navbar"
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});
export default function RootLayout({children}:{children:React.ReactNode}){
    return(
        <html lang="en">
            
            <body className={poppins.className}>
                <Navbar/>
                {children}
            </body>
        </html>
    )
}