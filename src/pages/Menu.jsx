import { useLoaderData } from "react-router-dom";
import { SearchForm, GridLayout } from "../components";
import { customFetch, apiKey } from "../utils/utils";

const menuQuery = (searchTerm) => {
    return {
        queryKey: ["menu", searchTerm || "pasta"],
        queryFn: () =>
            customFetch(
                `/food/menuItems/search?query=${searchTerm}&number=12&apiKey=${apiKey}`
            ),
    };
};

export const loader =
    (queryClient) =>
    async ({ request }) => {
        const url = new URL(request.url);
        const searchTerm = url.searchParams.get("search") || "pasta";
        const response = await queryClient.ensureQueryData(
            menuQuery(searchTerm)
        );
        const menu = response.data.menuItems;
        return { menu, searchTerm };
    };

const Menu = () => {
    const { menu, searchTerm } = useLoaderData();
    return (
        <div className='px-4 lg:px-20 pt-8 flex flex-col gap-8'>
            <SearchForm searchTerm={searchTerm} />
            <GridLayout items={menu} path='menu' />
        </div>
    );
};
export default Menu;
