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
        <>
            <div className='text-3xl md:text-4xl'>
                <NavLink to='/' className='font-medium'>
                    DishCovery
                </NavLink>
            </div>
            <nav>
                <ul className='navlinks bg-white hidden md:flex lg:gap-x-8'>
                    <NavLinks />
                </ul>
            </nav>
            <div className='relative z-20 md:hidden' onClick={toggleNavbar}>
                <Hamburger size={28} label='Open Navigation' />
            </div>
            <nav
                className={`mobile-navigation fixed top-0 right-0 pt-14 pl-4 bg-white/50 z-10 h-full transition-all duration-500 ease-in-out backdrop-blur-sm md:hidden ${
                    isOpen ? "visible w-full" : "invisible w-0"
                }`}
            >
                <ul className='navlinks flex flex-col gap-y-8'>
                    <NavLinks />
                </ul>
            </nav>
        </>
    );
};
export default Navbar;
