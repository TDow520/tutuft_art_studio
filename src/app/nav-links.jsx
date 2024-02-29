"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "Events",
        href: "/upcoming"
    },
    {
        name: "About",
        href: "/about"
    },
    {
        name: "About",
        href: "/about"
    },
    {
        name: "About",
        href: "/about"
    }
];

export default function NavLinks() {
    const currentPath = usePathname();  
    
    return (
        <div className="flex">
            <div className="border border-red-800 mr-[5%] ]">
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="Tuft Logo"
                        width={200}
                        height={200}
                    />
                </Link>
            </div>
            <nav className="flex border py-[1%] mr-[3%] justify-around border-black w-[75%]">
                {links.map((link, index) => (
                    <Link key={index} href={link.href}>
                        <div
                            className={`flex flex-row m-1 text-emerald-600 drop-shadow-lg  ${
                                currentPath === link.href ? "active" : ""
                            }`}
                        >
                            {link.name}
                        </div>
                    </Link>
                ))}
            </nav>
        </div>
    );
}
