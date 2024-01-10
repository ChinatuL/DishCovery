import { useLoaderData } from "react-router-dom";
import { GridLayout, SearchForm } from "../components";
import { customFetch, apiKey } from "../utils/utils";

const winesQuery = (searchTerm) => {
    return {
        queryKey: ["wines", searchTerm || "red_wine"],
        queryFn: () =>
            customFetch(
                `/food/wine/recommendation?wine=${searchTerm}&number=12&apiKey=${apiKey}`
            ),
    };
};

export const loader =
    (queryClient) =>
    async ({ request }) => {
        const url = new URL(request.url);
        const searchTerm = url.searchParams.get("search") || "red_wine";
        const response = await queryClient.ensureQueryData(
            winesQuery(searchTerm)
        );
      const wines = response.data.recommendedWines;
        return { wines, searchTerm };
    };

const Wines = () => {
  const { wines, searchTerm } = useLoaderData();
    return (
        <div className='wines px-4 lg:px-20 pt-8 flex flex-col gap-8'>
            <SearchForm searchTerm={searchTerm} placeholder='Search wines' />
            <GridLayout items={wines} path='wines' />
        </div>
    );
};
export default Wines;
