import GridLayout from "./GridLayout"
import SectionTitle from "./SectionTitle"
const FeaturedRecipes = ({items, path}) => {
  return (
      <>
          <SectionTitle size='text-3xl' text='Featured Recipes' />
          <GridLayout items={items} path={path} />
      </>
  );
}
export default FeaturedRecipes