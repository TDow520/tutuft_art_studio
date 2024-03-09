"use client";

import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { usePathname, useState } from "next/navigation";

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
    // const [showMenu, setShowMenu] = useState(false);
    
    // const handleMenuClick = () => {
    //     setShowMenu(!showMenu);
    // };

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
                {/* <div className="px-1 m-2 lg:hidden" onClick={handleMenuClick}>
                    {!showMenu ? (
                        <AiOutlineMenu size={20} />
                    ) : (
                        <AiOutlineClose size={20} />
                    )}
                </div> */}
                {/* <div
                    className={
                        showMenu
                            ? "fixed left-[.05%] top-[55px] w-[60%] h-[60%] border-l border-l-gray-900 bg-gray-500 shadow-lg shadow-white rounded-[2%] ease-in-out duration-500 z-[1] ml-2"
                            : "fixed left-[-90%]"
                    }
                >
                    <ul className="uppercase p-10 ml-2"> */}
                        {/* <li className="p-4 border-b border-gray-700 hover:font-bold">
                                <Link to ={`/`}>Sign-in</Link>
                            </li> */}
                        {/* {links.map((link, index) => (
                            <Link key={index} href={link.href}>
                                <li
                                    className={`flex flex-row m-1 text-emerald-600 drop-shadow-lg  ${
                                        currentPath === link.href
                                            ? "active"
                                            : ""
                                    }`}
                                >
                                    {link.name}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div> */}
            </nav>
        </div>
    );
}
