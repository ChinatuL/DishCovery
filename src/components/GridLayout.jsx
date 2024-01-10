import { Link } from "react-router-dom";
const GridLayout = ({ items, path }) => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[1fr]'>
            {items.map((item) => {
                const { id, title, image, imageUrl } = item;
                // skip items whose image links are broken
                if (image && image.includes("file")) {
                    return null;
                }
                return (
                    <Link
                        key={id}
                        to={`/${path}/${id}`}
                        className='bg-white pt-4 pb-2 px-6 shadow-md hover:shadow-2xl rounded-lg transition-all duration-300 ease-in-out'
                    >
                        <div>
                            <img
                                src={image || imageUrl}
                                alt={title}
                                className='rounded-xl h-64 md:h-48 w-full object-cover'
                            />
                            <p className='text-center text-lg py-2'>{title}</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};
export default GridLayout;
