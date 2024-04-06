"use client";

import Link from "next/link";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
        name: "Gallery",
        href: "/gallery"
    },
    {
        name: "Cart",
        href: "/cart"
    }
];

export default function NavLinks() {
    const currentPath = usePathname();
    const [showMenu, setShowMenu] = useState(false);

    const handleCloseMenu = () => {
        setShowMenu(false);
    };

    return (
        <div className="flex text-emerald-600">
            <div className="border border-red-800 mr-[5%] gap-5">
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
                            className={`flex flex-row phone:hidden tablet:hidden m-1  drop-shadow-lg text-3xl ${
                                currentPath === link.href ? "active" : ""
                            } hover:font-bold hover:text-emerald-800 hover:underline`}
                        >
                            {link.name}
                        </div>
                    </Link>
                ))}
                <section className="flex flex-row justify-between gap-3 ">
                    <AiOutlineShoppingCart className="flex border boder-slate-500 text-4xl laptop:hidden desktop:hidden " />
                    <FiMenu
                        onClick={() => setShowMenu(true)}
                        className="flex border boder-slate-500 text-4xl laptop:hidden desktop:hidden "
                    />
                </section>

                {/* This is the side menu section */}
                {/* this needs to hide when showMenu is false */}
                {showMenu && (
                    <div className="fixed h-full w-screen laptop:hidden desktop:hidden bg-black/65 backdrop-blur-sm top-0 left-0 ">
                        <section className="text-emerald-600 bg-white  flex-col absolute right-0 top-0 z-50  h-screen p-8 gap-8 transition duration-300 ease-in-out w-56 ">
                            {/* insert the x icon as abutton to close the menu */}

                            <AiOutlineClose
                                onClick={() => setShowMenu(false)}
                                className=" mt-0 mb-8 ml-[70%] text-5xl cursor-pointer hover:text-bold"
                            />

                            {/* inputs the menu selections */}
                            <div className="flex flex-col gap-10">
                                {links.map((link, index) => (
                                    <Link key={index} href={link.href}>
                                        <div
                                            className={`flex flex-row m-1 drop-shadow-lg text-3xl ${
                                                currentPath === link.href
                                                    ? "active"
                                                    : ""
                                            } hover:font-bold hover:text-emerald-800 hover:underline`}
                                            onClick={handleCloseMenu} // Close the menu when any link is clicked
                                        >
                                            {link.name}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    </div>
                )}
            </nav>
        </div>
    );
}
