import React from 'react';
import { Step } from '../../types/recipe';

const RecipeStep: React.FC<{ steps: Step[] }> = ({ steps }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center mb-6">
        <div className="w-2 h-8 bg-black mr-4"></div>
        <h2 className="text-2xl font-bold text-gray-900">手順</h2>
      </div>

      <ol className="list-decimal pl-6 mb-4 space-y-8">
        {steps.map((step, index) => (
          <li
            key={index}
            className="flex flex-col lg:flex-row items-start lg:items-center gap-6"
          >
            <div className="flex-1">
              <p className="font-bold text-lg text-black">{`Step ${step.step_number}: ${step.description}`}</p>
              {step.note && (
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  {step.note}
                </p>
              )}
            </div>

            {step.image && (
              <div className="w-full lg:w-48 h-auto mt-4 lg:mt-0">
                <img
                  src={step.image}
                  alt={`Step ${index + 1}`}
                  className="rounded-md shadow-sm object-cover"
                />
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeStep;
