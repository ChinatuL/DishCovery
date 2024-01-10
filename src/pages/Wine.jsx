import { useLoaderData, useParams } from "react-router-dom";
const Wine = () => {
    const { wines } = useLoaderData();
    const { id } = useParams();
    const wine = wines.find((wine) => wine.id === Number(id));
    const { title, description, imageUrl } = wine;
    return (
        <div className='flex flex-col justify-center items-center gap-8 px-4 lg:px-20 pt-8'>
            <h1 className='text-2xl text-center font-semibold'>{title}</h1>
            <div className='grid lg:grid-cols-2 place-items-center'>
                <img src={imageUrl} alt={title} />
                <p className='text-lg leading-8 pt-4'>{description}</p>
            </div>
        </div>
    );
};
export default Wine;
