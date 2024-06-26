import React from 'react';
import NutritionInfo from '../molecules/NutritionInfo';
import RecipeStep from '../molecules/RecipeStep';
import Ingredients from '../molecules/Ingredients';
import { Recipe } from '../../types/recipe';
import { FaClock } from "@react-icons/all-files/fa/FaClock";
import { FaFire } from "@react-icons/all-files/fa/FaFire";

const RecipeDetail: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
  const fixedWidth = '7ch'; 

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold mb-6 text-black tracking-wide">{recipe.title}</h1>

      <img
        src={recipe.headerImage}
        alt={recipe.title}
        className="w-full h-auto mb-8 rounded-md border border-black"
      />

      <p className="text-gray-800 mb-6 leading-relaxed">{recipe.story}</p>

      <div className="flex justify-end items-center mb-8 bg-white">
        <div className="flex flex-col text-right space-y-2">
          <div className="flex items-center justify-end" style={{ minWidth: fixedWidth }}>
            <FaFire className="text-black mr-2" />
            <span className="text-black font-medium text-right" style={{ minWidth: fixedWidth }}>
              {recipe.calories}
            </span>
          </div>
          <div className="flex items-center justify-end" style={{ minWidth: fixedWidth }}>
            <FaClock className="text-black mr-2" />
            <span className="text-black font-medium text-right" style={{ minWidth: fixedWidth }}>
              {recipe.cookingTime}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between mb-8">
        <div className="w-full lg:w-1/2 lg:pr-4 mb-8 lg:mb-0">
          <Ingredients ingredients={recipe.ingredients} />
        </div>

        <div className="w-full lg:w-1/2 lg:pl-4">
          <NutritionInfo nutrition={recipe.nutrition} />
        </div>
      </div>

      <div className="mb-8">
        <RecipeStep steps={recipe.steps} />
      </div>
    </div>
  );
};

export default RecipeDetail;
