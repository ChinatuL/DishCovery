import { Link } from "react-router-dom";
import ContactInfo from "./ContactInfo";
import SocialLinks from "./SocialLinks";
import { links } from "../utils/data";
const Footer = () => {
    return (
        <div className='flex flex-col gap-6 px-4 py-8 lg:px-20 bg-zinc-950 text-slate-50'>
            <Link to='/' className='text-3xl font-bold'>
                DishCovery
            </Link>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 content-center gap-8'>
                <div className='flex flex-col gap-4'>
                    <ContactInfo />
                </div>
                <ul className='grid grid-cols-3 gap-y-2 md:gap-y-0'>
                    {links.map((link) => {
                        const { id, url, text } = link;
                        return (
                            <li key={id} className='w-fit'>
                                <Link
                                    to={url}
                                    className='capitalize text-lg hover:opacity-70 hover:scale-150 transition-all duration-300 ease-in-out'
                                >
                                    {text}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <div className='flex justify-center md:justify-normal  items-center gap-8 text-xl'>
                    <SocialLinks />
                </div>
            </div>

            <div className='flex flex-col md:flex-row justify-center gap-4'>
                <p> &copy;2023 Chinatu Lucia, Eke. All Rights Reserved </p>
                <Link
                    to='/privacy-policy'
                    className='capitalize md:border-l-2 md:border-r-2 md:px-4'
                >
                    privacy policy
                </Link>
                <Link to='/terms-of-use' className='capitalize'>
                    terms-of-use
                </Link>
            </div>
        </div>
    );
};
export default Footer;
