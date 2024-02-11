import Image from "next/image";
import NavLinks from "./nav-links";
const currentDate = new Date();

export default function Home() {
    let year = currentDate.getFullYear();

    return (
        <div className="flex flex-col border border-white text-center mx-[2.5%] h-screen ">
            this is the main container
            <div className="flex flex-col border border-red-800 text-[150%] h-[2.5%]">
                <NavLinks />
            </div>
            <div>Hello this is the homepage container</div>
            <footer className="flex flex-col text-[25%]">
                copyright {year}
            </footer>
        </div>
    );
}
