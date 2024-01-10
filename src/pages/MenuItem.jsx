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
        console.log(menuItem);
        return { menuItem };
    };

const MenuItem = () => {
    const { menuItem } = useLoaderData();
    const { title, image, breadcrumbs } = menuItem;
    return <div>MenuItem</div>;
};
export default MenuItem;
