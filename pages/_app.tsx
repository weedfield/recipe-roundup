import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRecipeStore } from '../stores/recipeStore';

function MyApp({ Component, pageProps }: AppProps) {
  const { setRecipes, setFeaturedTags } = useRecipeStore();

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const recipeResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data/recipes.json`);
        const recipes = await recipeResponse.json();

        const tagsResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data/featuredTags.json`);
        const featuredTags = await tagsResponse.json();

        setRecipes(recipes);
        setFeaturedTags(featuredTags);
      } catch (error) {
        console.error('Error fetching initial data:', error);
      }
    };

    fetchInitialData();
  }, [setRecipes, setFeaturedTags]);

  return <Component {...pageProps} />;
}

export default MyApp;
