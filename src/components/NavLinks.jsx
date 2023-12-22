import { NavLink } from "react-router-dom";

const links = [
    { id: 1, url: "/about", text: "about" },
    { id: 2, url: "/menu", text: "menu" },
    { id: 3, url: "/recipes", text: "recipes" },
    { id: 4, url: "/wines", text: "wines" },
    { id: 5, url: "/newsletter", text: "newsletter" },
];
const NavLinks = (toggleNavbar) => {
    return (
        <>
            {links.map((link) => {
                const { id, url, text } = link;
                return (
                    <li key={id} className='group px-4 w-fit'>
                        <NavLink
                            onClick={toggleNavbar}
                            to={url}
                            className='capitalize text-lg font-light tracking-widest py-2 transition-all duration-300 group-hover:opacity-70'
                        >
                            {text}
                        </NavLink>
                        <div className='h-[2px] w-0 bg-zinc-950 transition-all duration-300 group-hover:w-full'></div>
                    </li>
                );
            })}
        </>
    );
};
export default NavLinks;
