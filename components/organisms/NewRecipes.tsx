import RecipeCard from '../molecules/RecipeCard';
import { useRecipeStore } from '../../stores/recipeStore';

const NewRecipes: React.FC = () => {
  const { getSortedRecipes } = useRecipeStore();
  const newRecipes = getSortedRecipes().slice(0, 5);

  return (
    <div className="bg-white p-4 rounded-lg">
      <h2 className="text-2xl font-extrabold mb-4 text-black border-b-2 border-black pb-2">
        新着レシピ
      </h2>
      <div className="space-y-4">
        {newRecipes.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default NewRecipes;
