import { useLoaderData } from "react-router-dom";
import { SearchForm, GridLayout } from "../components";
import { customFetch, apiKey } from "../utils/utils";

const recipesQuery = (searchTerm) => {
    return {
        queryKey: ["recipes", searchTerm || "pasta"],
        queryFn: () =>
            customFetch(
                `/recipes/complexSearch?query=${searchTerm}&number=12&apiKey=${apiKey}`
            ),
    };
};

export const loader =
    (queryClient) =>
    async ({ request }) => {
        const url = new URL(request.url);
        const searchTerm = url.searchParams.get("search") || "pasta";
        const response = await queryClient.ensureQueryData(
            recipesQuery(searchTerm)
        );
        const recipes = response.data.results;

        return { recipes, searchTerm };
    };

const Recipes = () => {
    const {recipes, searchTerm } = useLoaderData();
    return (
        <div className='px-4 lg:px-20 pt-8 flex flex-col gap-8'>
            <SearchForm searchTerm={searchTerm} placeholder='Search recipes' />
            <GridLayout items={recipes} />
        </div>
    );
};
export default Recipes;
