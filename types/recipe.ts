export interface Ingredient {
  name: string;
  quantity: string;
}

export interface Step {
  step_number: number;
  description: string;
  note: string;
  image: string;
}

export interface Nutrition {
  protein: string;
  fat: string;
  carbohydrates: string;
  vitamins: string[];
  minerals: string[];
}

export interface Recipe {
  _id: string;
  title: string;
  catchCopy: string;
  calories: string;
  category: string;
  ingredients: Ingredient[];
  steps: Step[];
  labels: string[];
  cookingTime: string;
  nutrition: Nutrition;
  headerImage: string;
  serves: string;
  story: string;
  published_at: string; 
  likes: number;
}
