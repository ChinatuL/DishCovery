import { useLoaderData } from "react-router-dom";
import { customFetch, apiKey } from "../utils/utils";

const menuItemQuery = (id) => {
    return {
        queryKey: ["menuItem", id],
        queryFn: () => customFetch(`/food/menuItems/${id}?apiKey=${apiKey}`),
    };
};

export const loader =
    (queryClient) =>
    async ({ params }) => {
        const response = await queryClient.ensureQueryData(
            menuItemQuery(params.id)
        );
        const menuItem = response.data;
        return { menuItem };
    };

const MenuItem = () => {
    const { menuItem } = useLoaderData();
    const { title, image, breadcrumbs, nutrition } = menuItem;
    const { calories, fat, protein, carbs, nutrients } = nutrition;
    const nutritionArray = [
        { name: "Calories", value: calories },
        { name: "Fat", value: fat },
        { name: "Protein", value: protein },
        { name: "Carbs", value: carbs },
    ];

    return (
        <div className=' px-4 lg:px-20 pt-8'>
            <h1 className='text-3xl text-center font-semibold mb-6'>{title}</h1>
            <div className='flex items-center justify-evenly gap-8'>
                <div className='flex flex-col items-center'>
                    <div className='flex gap-1 mt-4 bg-slate-100 w-max px-4 py-2'>
                        {breadcrumbs.map((breadcrumb, index) => {
                            return (
                                <p
                                    key={breadcrumb}
                                    className='capitalize text-sm'
                                >
                                    {breadcrumb}{" "}
                                    {index < breadcrumbs.length - 1 ? "|" : ""}{" "}
                                </p>
                            );
                        })}
                    </div>
                    <img
                        src={image}
                        alt={title}
                        className='w-96 object-contain'
                    />
                    <div className='flex gap-4'>
                        {nutritionArray.map((nutrition) => {
                            return (
                                <div
                                    key={nutrition.name}
                                    className='flex gap-1 items-center justify-center rounded-sm bg-zinc-950 text-slate-50 w-24 py-1'
                                >
                                    <span>{nutrition.value}</span>
                                    <span>{nutrition.name}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div>
                    <h2 className='text-xl font-semibold mb-4'>
                        Nutritional Information
                    </h2>
                    <table className='mt-4 table-auto border-collapse border border-zinc-950'>
                        <thead>
                            <tr>
                                <th>Nutrient</th>
                                <th>Amount</th>
                                <th>% of daily needs</th>
                            </tr>
                        </thead>
                        <tbody>
                            {nutrients.map((nutrient, index) => {
                                const {
                                    name,
                                    amount,
                                    unit,
                                    percentOfDailyNeeds,
                                } = nutrient;
                                return (
                                    <tr key={index}>
                                        <td>{name}</td>
                                        <td>
                                            {amount} {unit}
                                        </td>
                                        <td>{percentOfDailyNeeds}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
export default MenuItem;
