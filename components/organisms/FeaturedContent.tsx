import Link from "next/link";
import { useRecipeStore } from '../../stores/recipeStore';

const FeaturedContent = () => {
  const { featuredTags, recipes } = useRecipeStore();
  const tag = featuredTags.find(tag => tag.tag === 'ヘルシーレシピ');

  const featuredRecipes = recipes.filter(recipe =>
    tag?.recipes.includes(recipe._id)
  );

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white">
      {tag?.image && (
        <img
          src={tag.image}
          alt={tag.tag}
          className="w-full h-auto mb-4 rounded-md"
        />
      )}

      <h2 className="text-3xl font-extrabold mb-2 text-black">{tag?.title}</h2>
      <p className="text-gray-800 mb-6">{tag?.description}</p>

      <h2 className="text-2xl font-semibold mb-4 text-black border-b-2 border-black pb-2">
        おすすめのレシピ
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {featuredRecipes.map((recipe) => (
          <div
            key={recipe._id}
            className="border border-black rounded-lg overflow-hidden transition-shadow hover:shadow-2xl"
          >
            <img
              src={recipe.headerImage}
              alt={recipe.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2 text-black">{recipe.title}</h3>
              <p className="text-sm text-gray-700 mb-2">{recipe.catchCopy}</p>
              <h4 className="text-sm font-semibold mb-1 text-black">材料:</h4>
              <ul className="text-sm text-gray-700 mb-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>・{ingredient.name} - {ingredient.quantity}</li>
                ))}
              </ul>
              <h4 className="text-sm font-semibold mb-1 text-black">作り方:</h4>
              <ul className="text-sm text-gray-700">
                {recipe.steps.map((step, index) => (
                  <li key={index}>{index + 1}. {step.description}</li>
                ))}
              </ul>
              <Link href={`/recipes/${recipe._id}`}>
                <a className="block mt-4 text-black hover:underline text-sm font-semibold">
                  詳細を見る
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedContent;
