import { useLoaderData, Link } from "react-router-dom";
const GridLayout = () => {
    const { recipes } = useLoaderData();
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {recipes.map((recipe) => {
                const { id, title, image } = recipe;
                return (
                    <Link key={id} to={`/recipes/${id}`}>
                        <div>
                            <img
                                src={image}
                                alt={title}
                            />
                            <p>{title}</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};
export default GridLayout;
