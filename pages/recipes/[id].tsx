import { useRouter } from 'next/router';
import BaseLayout from '../../components/layouts/BaseLayout';
import RecipeDetail from '../../components/organisms/RecipeDetail';
import { useRecipeStore } from '../../stores/recipeStore';

const RecipeDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const recipes = useRecipeStore((state) => state.recipes); 
  const recipe = recipes.find((r) => r._id === id);

  if (!recipe) {
    return <div>レシピが見つかりません。</div>;
  }

  return (
    <BaseLayout>
      <RecipeDetail recipe={recipe} />
    </BaseLayout>
  );
};

export default RecipeDetailPage;
