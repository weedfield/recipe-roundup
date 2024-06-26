import { FeaturedTag } from './../types/featuredTag';
import { create } from 'zustand';
import { Recipe } from '../types/recipe';

interface RecipeState {
  recipes: Recipe[];
  featuredTags: FeaturedTag[];
  searchQuery: string;
  ingredientFilter: string;
  categoryFilter: string;
  caloriesFilter: string;
  cookingTimeFilter: string;
  filteredRecipes: Recipe[];
  setRecipes: (recipes: Recipe[]) => void;
  setFeaturedTags: (featuredTags: FeaturedTag[]) => void;
  getSortedRecipes: () => Recipe[];
  getPopularRecipes: () => Recipe[];
  setSearchQuery: (query: string) => void;
  setIngredientFilter: (ingredient: string) => void;
  setCategoryFilter: (category: string) => void;
  setCaloriesFilter: (calories: string) => void;
  setCookingTimeFilter: (cookingTime: string) => void;
  filterRecipes: () => void;
  resetFilters: () => void; 
}

export const useRecipeStore = create<RecipeState>((set, get) => ({
  recipes: [],
  featuredTags: [],
  searchQuery: '',
  ingredientFilter: '',
  categoryFilter: '',
  caloriesFilter: '',
  cookingTimeFilter: '',
  filteredRecipes: [],

  setRecipes: (recipes) => {
    set({ recipes });
    get().filterRecipes();
  },

  setFeaturedTags: (featuredTags) => set({ featuredTags }),

  getSortedRecipes: () => {
    const { recipes } = get();
    return [...recipes].sort(
      (a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
    );
  },

  getPopularRecipes: () => {
    const { recipes } = get();
    return [...recipes].sort((a, b) => (b.likes || 0) - (a.likes || 0));
  },

  setSearchQuery: (query) => {
    set({ searchQuery: query });
    get().filterRecipes();
  },

  setIngredientFilter: (ingredient) => {
    set({ ingredientFilter: ingredient });
    get().filterRecipes();
  },

  setCategoryFilter: (category) => {
    set({ categoryFilter: category });
    get().filterRecipes();
  },

  setCaloriesFilter: (calories) => {
    set({ caloriesFilter: calories });
    get().filterRecipes();
  },

  setCookingTimeFilter: (cookingTime) => {
    set({ cookingTimeFilter: cookingTime });
    get().filterRecipes();
  },

  filterRecipes: () => {
    const {
      recipes,
      searchQuery,
      ingredientFilter,
      categoryFilter,
      caloriesFilter,
      cookingTimeFilter,
    } = get();
    let filtered = recipes;

    if (searchQuery) {
      filtered = filtered.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (ingredientFilter) {
      filtered = filtered.filter((recipe) =>
        recipe.ingredients.some((ing) =>
          ing.name.toLowerCase().includes(ingredientFilter.toLowerCase())
        )
      );
    }
    if (categoryFilter) {
      filtered = filtered.filter((recipe) =>
        recipe.category.toLowerCase().includes(categoryFilter.toLowerCase())
      );
    }
    if (caloriesFilter) {
      filtered = filtered.filter(
        (recipe) => parseInt(recipe.calories) <= parseInt(caloriesFilter, 10)
      );
    }
    if (cookingTimeFilter) {
      filtered = filtered.filter(
        (recipe) => parseInt(recipe.cookingTime) <= parseInt(cookingTimeFilter, 10)
      );
    }

    set({ filteredRecipes: filtered });
  },

  resetFilters: () => {
    set({
      searchQuery: '',
      ingredientFilter: '',
      categoryFilter: '',
      caloriesFilter: '',
      cookingTimeFilter: '',
    });
    get().filterRecipes(); 
  },
}));
