"use client";
import Link from "next/link";
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
    }
];

export default function NavLinks() {
    const currentPath = usePathname();  
    
    return (
        <nav className="flex border h-[75%] justify-center border-black">{
            links.map((link, index) => (
                <Link key={index} href={link.href}>
                    <div className={`flex flex-row m-1 text-emerald-600 drop-shadow-lg  ${currentPath === link.href ? "active" : ""}`}>{link.name}</div>
                </Link>
            ))}
        </nav>
    );
}
