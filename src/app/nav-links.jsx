// Ensuring this code runs on the client side
"use client";

// Importing necessary modules and components
import Link from "next/link"; // Next.js link component
import Image from "next/image"; // Next.js image component
import { FiMenu } from "react-icons/fi"; // Menu icon
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai"; // Shopping cart and close icons
import { usePathname } from "next/navigation"; // Hook for current pathname
import { useState } from "react"; // useState hook from React

// Navigation links data
const links = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/upcoming" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: 'Cart', href: '/cart'}
    // Additional links can be added here
];

// Navigation links component
export default function NavLinks() {
    // State and logic will be added here for handling mobile menu, etc.
    const currentPath = usePathname();
    const [showMenu, setShowMenu] = useState(false);

    const handleCloseMenu = () => {
        setShowMenu(false);
    };

    const backdropClick = (e) => {
        // Check if the click is on the backdrop itself and not on the modal
        if (e.target.id === "backdrop") {
            handleCloseMenu();
        }
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
                            className={`flex flex-row phone:hidden tablet:hidden m-1 drop-shadow-lg text-3xl ${
                                currentPath === link.href ? "active" : ""
                            } hover:font-bold hover:text-emerald-800 hover:underline`}
                        >
                            {link.name}
                        </div>
                    </Link>
                ))}
                <section className="flex flex-row justify-between gap-3 ">
                    <Link href="/cart">
                        <AiOutlineShoppingCart
                            role="button"
                            aria-label="Open shopping cart"
                            className="flex border border-slate-500 text-4xl phone_land:hidden laptop:hidden desktop:hidden"
                        />
                    </Link>

                    <FiMenu
                        onClick={() => setShowMenu(true)}
                        role="button"
                        aria-label="Open menu"
                        className="flex border border-slate-500 text-4xl phone_land:hidden laptop:hidden desktop:hidden"
                    />
                </section>

                {/* This is the side menu section */}
                {/* this needs to hide when showMenu is false */}
                {showMenu && (
                    // This is the side menu section and it will have a scroll bar
                    <div
                        id="backdrop"
                        className="fixed h-full w-screen laptop:hidden desktop:hidden bg-black/65 backdrop-blur-sm top-0 left-0 "
                        onClick={backdropClick}
                    >
                        <section className="text-emerald-600 bg-white flex-col absolute right-0 top-0 h-screen p-8 gap-8 transition duration-300 ease-in-out w-56 phone:text-m overflow-y-scroll overflow-x-hidden">
                            {/* insert the x icon as abutton to close the menu */}

                            <AiOutlineClose
                                onClick={() => setShowMenu(false)}
                                role="button"
                                aria-label="Close menu"
                                className="mt-[-15%] mb-8 ml-[85%] text-3xl cursor-pointer hover:text-bold"
                            />

                            {/* inputs the menu selections */}
                            <div className="flex flex-col gap-10 scroll-m-2 overflow-y-auto">
                                {links.map((link, index) => (
                                    <Link key={index} href={link.href}>
                                        <div
                                            className={`flex flex-row m-1 drop-shadow-lg text-2xl ${
                                                currentPath === link.href
                                                    ? "active"
                                                    : ""
                                            } underline`}
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
};
