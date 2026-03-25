import React, { useState } from 'react';

const useState2 = useState;

const MenuCard = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="menu-item-card">
      {/* Placeholder image */}
      <div className="w-full h-48 bg-gradient-to-br from-red-400 to-yellow-300 flex items-center justify-center">
        <span className="text-6xl">🍲</span>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-900">{item.name || 'Dish Name'}</h3>
          {item.isSpecial && (
            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">Special</span>
          )}
        </div>
        
        <p className="text-gray-600 text-sm mb-3">{item.description || 'Delicious Chinese dish'}</p>
        
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-red-600">
            Rs. {item.price || '0'}
          </div>
          <button className="btn-primary text-sm">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
