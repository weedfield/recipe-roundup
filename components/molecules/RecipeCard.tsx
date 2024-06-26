import Link from "next/link";
import { Recipe } from "../../types/recipe";

const RecipeCard: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
  return (
    <Link href={`/recipes/${recipe._id}`}>
      <div className="flex border border-black rounded-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl max-w-2xl min-h-[150px] bg-white">
        <div className="w-36 flex items-center justify-center bg-gray-200">
          <img
            src={recipe.headerImage || "http://via.placeholder.com/150"}
            alt={recipe.title}
            className="w-full h-auto0"
          />
        </div>
        <div className="p-4 flex flex-col justify-center flex-1">
          <h2 className="text-lg font-bold text-black mb-2">{recipe.title}</h2>
          <p className="text-sm text-gray-800 mb-4">{recipe.catchCopy}</p>
          <div className="flex justify-between text-sm text-gray-700">
            <span>{recipe.calories}</span>
            <span>{recipe.cookingTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
