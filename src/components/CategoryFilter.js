import React from 'react';

const CategoryFilter = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <select name="category">
      <option value="All">
        All
      </option>
      {categories.map(category => (
        <option value={category} key={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;
