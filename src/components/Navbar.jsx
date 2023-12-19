import { useState } from "react";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { Divide as Hamburger } from "hamburger-react";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className='bg-white text-zinc-950 flex justify-between items-center py-1 px-8 md:py-2 md:px-20 fixed w-full'>
            <div className='text-3xl md:text-4xl'>
                <NavLink to='/' className='font-medium'>
                    DishCovery
                </NavLink>
            </div>
            <ul
                className={`navlinks bg-white fixed top-14 right-0 flex h-full flex-col gap-y-8 transition-all md:relative md:top-0 md:bg-transparent md:flex md:flex-row md:gap-x-8 md:w-auto ${
                    isOpen ? "w-6/12" : "w-0"
                }`}
            >
                <NavLinks />
            </ul>
            <div className='md:hidden' onClick={toggleNavbar}>
                <Hamburger size={28} />
            </div>
        </nav>
    );
};
export default Navbar;
