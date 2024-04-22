// Importing necessary components
import NavLinks from "./nav-links"; // Component for navigation links
import Link from "next/link"; // Next.js link component
import Image from "next/image"; // Next.js image component

// Navigation banner component
export default function navBanner() {
    return (
        <div className="">
            {/* Inserting navigation links component */}
            <NavLinks />
        </div>
    );
}
