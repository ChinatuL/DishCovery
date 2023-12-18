import { NavLink } from "react-router-dom";

const links = [
    { id: 1, url: "/about", text: "about" },
    { id: 2, url: "/menu", text: "menu" },
    { id: 3, url: "/recipes", text: "recipes" },
    { id: 4, url: "/wines", text: "wines" },
    { id: 5, url: "/newsletter", text: "newsletter" },
];
const NavLinks = () => {
    return (
        <>
            {links.map((link) => {
                const { id, url, text } = link;
                return (
                    <li key={id} className='group'>
                        <NavLink
                            to={url}
                            className='capitalize text-lg font-light tracking-widest transition-all duration-300 group-hover:bg-neutral-100 py-2 px-4 rounded-md'
                        >
                            {text}
                        </NavLink>
                    </li>
                );
            })}
        </>
    );
};
export default NavLinks;
