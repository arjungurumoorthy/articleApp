import React from "react";

interface CategoryFilterProps {
  selectedCategories: string[];
  handleCategoryChange: (category: string) => void;
categoryOptions:Set<string> | undefined;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategories, handleCategoryChange,categoryOptions }) => {
  return (
    <div className="section category">
      <h2>Category</h2>
      <ul>
       
      
        {categoryOptions && Array.from(categoryOptions).map((category) => (
          <li key={category}>
            <input
              type="checkbox"
              id={category}
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />
            <label htmlFor={category}>{category}</label>
          </li>
        ))}
      
      </ul>
    </div>
  );
};

export default CategoryFilter;
