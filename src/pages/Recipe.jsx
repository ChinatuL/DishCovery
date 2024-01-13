import { useLoaderData } from "react-router-dom";
import { BiSolidDish } from "react-icons/bi";
import { MdTimer } from "react-icons/md";
import { SectionTitle } from "../components";
import { customFetch, apiKey } from "../utils/utils";

const singleRecipeQuery = (id) => {
    return {
        queryKey: ["singleRecipe", id],
        queryFn: () =>
            customFetch(`/recipes/${id}/information?apiKey=${apiKey}`),
    };
};

export const loader =
    (queryClient) =>
    async ({ params }) => {
        const response = await queryClient.ensureQueryData(
            singleRecipeQuery(params.id)
        );
        const recipe = response.data;
        return { recipe };
    };

const Recipe = () => {
    const { recipe } = useLoaderData();
    const {
        title,
        image,
        summary,
        readyInMinutes,
        servings,
        winePairing,
        extendedIngredients,
        analyzedInstructions,
    } = recipe;

    const { pairedWines, pairingText } = winePairing;
    const { steps } = analyzedInstructions[0];

    const parseSummaryToText = (summary) => {
        const parser = new DOMParser();
        const parsedHtml = parser.parseFromString(summary, "text/html");
        const parsedText = parsedHtml.body.innerText;
        return parsedText;
    };

    return (
        <div className='flex flex-col justify-center items-center gap-8 px-4 lg:px-20 pt-8'>
            <div className='grid md:grid-cols-2 items-center gap-4'>
                <div className='flex flex-col'>
                    <h1 className='text-3xl font-semibold'>{title}</h1>
                    <div className='pt-4'>
                        <img src={image} alt={title} className='rounded-lg' />
                    </div>
                    <div className='flex gap-4 text-2xl font-bold'>
                        <div className='flex gap-2 items-center '>
                            <MdTimer />
                            <span>{readyInMinutes}</span>
                        </div>
                        <span> - </span>
                        <div className='flex gap-2 items-center'>
                            <BiSolidDish />
                            <span>{servings}</span>
                        </div>
                    </div>
                </div>
                <p className='text-lg tracking-wider'>
                    {parseSummaryToText(summary)}
                </p>
            </div>
            {winePairing && (
          <section className='flex flex-col gap-2'>
                    <SectionTitle size="text-2xl" text='Wine Pairing' />
                    <div className='text-lg tracking-wider'>
                        <p>
                            <span> {title} can be paired with</span>
                            {pairedWines.map((wine, index) => {
                                return (
                                    <span key={wine}>
                                        {wine}
                                        {index < pairedWines.length - 1
                                            ? ", "
                                            : ""}
                                    </span>
                                );
                            })}
                        </p>
                    </div>
                    <p className='text-lg tracking-wider'>{pairingText}</p>
                </section>
            )}
            <div className='grid md:grid-cols-2 gap-4 text-lg tracking-wider'>
          <section className='flex flex-col gap-2'>
                    <SectionTitle size="text-2xl" text='Ingredients' />
                    <ol>
                        {extendedIngredients.map((ingredient) => {
                            const { id, original } = ingredient;
                            return (
                                <li key={id} className='list-decimal pb-2 ml-8'>
                                    {original}
                                </li>
                            );
                        })}
                    </ol>
                </section>
          <section className='flex flex-col gap-2'>
                    <SectionTitle size="text-2xl" text='Directions' />
                    <div className='flex flex-col gap-2'>
                        {steps.map((item) => {
                            const { number, step } = item;
                            return (
                                <div key={number}>
                                    <p className='font-semibold'>
                                        Step {number}:
                                    </p>
                                    <p>{step}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>
        </div>
    );
};
export default Recipe;
