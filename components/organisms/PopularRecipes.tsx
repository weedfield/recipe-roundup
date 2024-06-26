import RecipeCard from '../molecules/RecipeCard';
import { useRecipeStore } from '../../stores/recipeStore';

const PopularRecipes: React.FC = () => {
  const { getPopularRecipes } = useRecipeStore();
  const popularRecipes = getPopularRecipes().slice(0, 5);

  return (
    <div className="bg-white p-4 rounded-lg mb-8">
      <h2 className="text-2xl font-extrabold mb-4 text-black border-b-2 border-black pb-2">
        人気レシピランキング
      </h2>
      <div className="space-y-4">
        {popularRecipes.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default PopularRecipes;
