import NavLinks from "./nav-links";
import Link from 'next/link';

export default function navBanner(){
    return (
        <div className="border border-red-800">
            <NavLinks />
        </div>
    ); 
}
