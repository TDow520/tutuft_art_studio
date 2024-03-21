import { Inter } from "next/font/google";
import NavBanner from "./NavBanner";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });
const currentDate = new Date();

export const metadata = {
    title: "TuTuft, LLC.",
    description: "Generated by create next app"
};
const RootLayout = ({ children }) => {
    let year = currentDate.getFullYear();

    return (
        <html lang="en">
            <body className={` ${inter.className} `}>
                <div className="flex flex-col w-[100%] items-center text-center bg-gradient-to-b to-green-600 from-slate-100">
                    <header className="w-full bg-white">
                        <NavBanner />
                    </header>
                    This is the main container
                    <div className="flex flex-col h-[95%] w-[95%] border border-yellow-200 text-center items-center">
                        {children}
                        <SpeedInsights />
                    </div>
                    <footer className="flex flex-col mt-[.5%] text-center justify-center border border-red-800 desktop:text-[150%] laptop:w-[55%]">
                        copyright &copy; {year}
                    </footer>
                </div>
            </body>
        </html>
    );
};

export default RootLayout;

