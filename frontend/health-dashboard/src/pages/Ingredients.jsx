// src/pages/Ingredients.jsx
import React, { useState } from 'react';

const dummyIngredients = [
  { name: 'Oats', type: 'Carb', quantity: '500g', available: true },
  { name: 'Chicken Breast', type: 'Protein', quantity: '1kg', available: false },
  { name: 'Almond Milk', type: 'Fat', quantity: '1L', available: true },
];

const Ingredients = () => {
  const [ingredients, setIngredients] = useState(dummyIngredients);

  const toggleAvailability = (index) => {
    const updated = [...ingredients];
    updated[index].available = !updated[index].available;
    setIngredients(updated);
  };

  return (
    <h1 className='text-[50px]  dark:text-white mb-10'>Ask My Aai</h1>
  );
};

export default Ingredients;
