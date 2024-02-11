import NavLinks from "../nav-links";
import Link from "next/link";

export default function Layout({ children }) {
    return (
        <div>
            <NavLinks />
        </div>
    );
}
