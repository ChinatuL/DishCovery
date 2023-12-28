import { socialLinks } from "../utils/data";
const SocialLinks = () => {
    return (
        <>
            {socialLinks.map((link) => {
                const { id, icon, url } = link;
                return (
                    <div
                        key={id}
                        className='transition duration-300 ease-in-out hover:scale-125'
                    >
                        <a
                            href={url}
                            className='hover:opacity-70 hover:scale-150 transition-all duration-300 ease-in-out'
                        >
                            {icon}
                        </a>
                    </div>
                );
            })}
        </>
    );
};
export default SocialLinks;
