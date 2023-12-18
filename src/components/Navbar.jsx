import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
const Navbar = () => {
    return (
        <nav className='bg-white text-zinc-950 flex justify-between items-center py-2 px-20 fixed w-full'>
            <div className='text-3xl md:text-4xl'>
                <NavLink to='/' className='font-medium'>
                    DishCovery
                </NavLink>
            </div>
            <ul className='navlinks flex gap-x-8'>
                <NavLinks />
            </ul>
        </nav>
    );
};
export default Navbar;
