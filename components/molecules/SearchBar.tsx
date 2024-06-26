import React, { useState } from "react";
import { useRecipeStore } from "../../stores/recipeStore";

const SearchBar = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);
  const setSearchQuery = useRecipeStore((state) => state.setSearchQuery);
  const setIngredientFilter = useRecipeStore(
    (state) => state.setIngredientFilter
  );
  const setCategoryFilter = useRecipeStore((state) => state.setCategoryFilter);
  const setCaloriesFilter = useRecipeStore((state) => state.setCaloriesFilter);
  const setCookingTimeFilter = useRecipeStore(
    (state) => state.setCookingTimeFilter
  );

  const [query, setQuery] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [category, setCategory] = useState("");
  const [calories, setCalories] = useState("");
  const [cookingTime, setCookingTime] = useState("");

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const handleClear = () => {
    setSearchQuery("");
    setIngredientFilter("");
    setCategoryFilter("");
    setCaloriesFilter("");
    setCookingTimeFilter("");

    setQuery("");
    setIngredient("");
    setCategory("");
    setCalories("");
    setCookingTime("");
  };

  const categories = ["主菜", "副菜", "汁物", "飲み物", "デザート"];

  return (
    <div className="w-full mx-auto mb-4 bg-white rounded-md ">
      <div className="lg:flex lg:space-x-4 lg:items-center lg:justify-between lg:p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:p-0 lg:grid-cols-none lg:flex lg:space-x-4 lg:w-full">
          <input
            type="text"
            placeholder="レシピを検索"
            className="p-2 border border-black rounded-sm w-full hover:bg-gray-100 transition text-black"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSearchQuery(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="材料"
            className="p-2 border border-black rounded-sm w-full hover:bg-gray-100 transition text-black"
            value={ingredient}
            onChange={(e) => {
              setIngredient(e.target.value);
              setIngredientFilter(e.target.value);
            }}
          />
          <select
            className={`p-2 border border-black rounded-sm w-full hover:bg-gray-100 transition ${
              category === "" ? "text-gray-400" : "text-black"
            }`}
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setCategoryFilter(e.target.value);
            }}
          >
            <option value="">カテゴリー</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          <input
            type="number"
            placeholder="カロリー"
            className="p-2 border border-black rounded-sm w-full hover:bg-gray-100 transition text-black"
            value={calories}
            onChange={(e) => {
              setCalories(e.target.value);
              setCaloriesFilter(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="調理時間 (分)"
            className="p-2 border border-black rounded-sm w-full hover:bg-gray-100 transition text-black"
            value={cookingTime}
            onChange={(e) => {
              setCookingTime(e.target.value);
              setCookingTimeFilter(e.target.value);
            }}
          />
        </div>
        <div className="p-4 lg:p-0 lg:w-auto">
          <button
            className="p-2 bg-black text-white rounded-sm w-full lg:min-w-16 font-bold hover:bg-gray-800 transition"
            onClick={handleClear}
          >
            クリア
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
