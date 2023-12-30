import { useLoaderData, Link } from "react-router-dom";
const GridLayout = () => {
    const { recipes } = useLoaderData();
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[1fr]'>
            {recipes.map((recipe) => {
                const { id, title, image } = recipe;
                return (
                    <Link
                        key={id}
                        to={`/recipes/${id}`}
                        className='bg-white pt-4 pb-2 px-6 shadow-md hover:shadow-2xl rounded-lg transition-all duration-300 ease-in-out'
                    >
                        <div>
                            <img
                                src={image}
                                alt={title}
                                className='rounded-xl h-64 md:h-48 w-full object-cover '
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
