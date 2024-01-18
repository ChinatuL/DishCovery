import { Link } from "react-router-dom";
const GridLayout = ({ items, path }) => {
    return (
        <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[1fr]'>
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
                        className='bg-white shadow-md hover:shadow-xl rounded-lg transition-all duration-300 ease-in-out'
                    >
                        <div>
                            <img
                                src={image || imageUrl}
                                alt={title}
                                className='rounded-t-xl h-64 md:h-40 w-full object-cover'
                            />
                            <p className='capitalize font-medium text-lg py-2 px-4'>
                                {title}
                            </p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};
export default GridLayout;
