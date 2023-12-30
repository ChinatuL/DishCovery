import { useLoaderData } from "react-router-dom";
import { customFetch, apiKey } from "../utils/utils";

export const loader = async ({ params }) => {
    const response = await customFetch(
        `/recipes/${params.id}/information/?apiKey=${apiKey}`
    );
    const recipe = response.data;
    console.log(response);
    return { recipe };
};

const Recipe = () => {
    const { recipe } = useLoaderData();
    return <div>Recipe</div>;
};
export default Recipe;
