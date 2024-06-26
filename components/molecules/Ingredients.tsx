import React from 'react';
import { Ingredient } from '../../types/recipe';

const Ingredients: React.FC<{ ingredients: Ingredient[] }> = ({ ingredients }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center mb-6">
        <div className="w-2 h-8 bg-black mr-4"></div>
        <h2 className="text-2xl font-bold text-gray-900">材料</h2>
      </div>

      <ul className="list-disc pl-6 space-y-2 text-gray-800">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="text-lg font-medium">
            {ingredient.name} - {ingredient.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ingredients;
