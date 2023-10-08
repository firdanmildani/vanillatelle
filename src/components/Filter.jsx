import React, { useState, useEffect } from 'react';

function Filter({ setCategoryFilter, selectedCategory }) {
  const [activeCategory, setActiveCategory] = useState(null);

  // Set the active category when the component mounts
  useEffect(() => {
    setActiveCategory(selectedCategory);
  }, [selectedCategory]);

  const handleButtonClick = (category) => {
    if (activeCategory === category) {
      // If the same button is clicked again, deactivate it and clear category filter
      setActiveCategory(null);
      setCategoryFilter(null); // Clear category filter
    } else {
      // Otherwise, set the clicked button as active
      setActiveCategory(category);
      setCategoryFilter(category); // Set the selected category
    }
  };

  const buttons = ['Vanilla Bean', 'Ground Vanilla', 'Vanilla Extract'];

  return (
    <div>
      {buttons.map((label, index) => (
        <button
          key={index}
          className={`btns ${activeCategory === label ? 'active' : ''}`} // Set active class based on activeCategory
          onClick={() => handleButtonClick(label)} // Pass the category label to handleButtonClick
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
