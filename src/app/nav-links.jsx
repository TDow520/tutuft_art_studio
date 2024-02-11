"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { name: "Home", href: "/ui/dashboard" },
    {
        name: "events",
        href: "/ui/dashboard/events"
    }
];

let link = links[0];
export default function NavLinks() {
    return (
        <>
            {link.name}
            this is the nav links area
        </>
    );
}
