import React, { useState, useEffect } from 'react';
import MenuCard from '../components/MenuCard';
import { getMenuItems } from '../api/apiClient';

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categories = ['All', 'Soups', 'Rice', 'Chow Mein', 'Chicken', 'Beef', 'Seafood', 'Vegetables'];

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true);
        // Try to fetch from API
        try {
          const data = await getMenuItems();
          setMenuItems(data || getDefaultMenu());
        } catch (err) {
          console.log('Using mock menu data');
          setMenuItems(getDefaultMenu());
        }
      } catch (err) {
        console.error('Error fetching menu:', err);
        setError('Failed to load menu. Showing cached menu.');
        setMenuItems(getDefaultMenu());
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  const getDefaultMenu = () => [
    { id: 1, name: 'Hot & Sour Soup', category: 'Soups', price: 250, description: 'Classic Chinese hot and sour soup', isSpecial: true },
    { id: 2, name: 'Egg Drop Soup', category: 'Soups', price: 220, description: 'Silky egg drop soup with cornstarch' },
    { id: 3, name: 'Wonton Soup', category: 'Soups', price: 280, description: 'Fresh wontons in delicate broth' },
    
    { id: 4, name: 'Egg Fried Rice', category: 'Rice', price: 350, description: 'Classic fried rice with eggs and veggies', isSpecial: true },
    { id: 5, name: 'Chicken Fried Rice', category: 'Rice', price: 400, description: 'Fragrant rice with tender chicken pieces' },
    { id: 6, name: 'Beef Fried Rice', category: 'Rice', price: 450, description: 'Premium beef fried rice' },
    { id: 7, name: 'Special House Rice', category: 'Rice', price: 500, description: 'Mixed vegetables and meat fried rice' },
    
    { id: 8, name: 'Chow Mein Special', category: 'Chow Mein', price: 400, description: 'Crispy noodles with sauce', isSpecial: true },
    { id: 9, name: 'Chicken Chow Mein', category: 'Chow Mein', price: 420, description: 'Stir-fried noodles with chicken' },
    { id: 10, name: 'Beef Chow Mein', category: 'Chow Mein', price: 480, description: 'Premium noodles with beef' },
    
    { id: 11, name: 'Kung Pao Chicken', category: 'Chicken', price: 440, description: 'Spicy chicken with peanuts' },
    { id: 12, name: 'General Tso Chicken', category: 'Chicken', price: 460, description: 'Sweet and spicy chicken' },
    { id: 13, name: 'Chicken with Broccoli', category: 'Chicken', price: 420, description: 'Tender chicken with fresh broccoli' },
    
    { id: 14, name: 'Beef with Black Bean Sauce', category: 'Beef', price: 520, description: 'Premium beef in savory sauce' },
    { id: 15, name: 'Mongolian Beef', category: 'Beef', price: 540, description: 'Spicy tender beef slices' },
    
    { id: 16, name: 'Shrimp with Garlic Sauce', category: 'Seafood', price: 580, description: 'Fresh shrimp in aromatic sauce' },
    { id: 17, name: 'Sweet and Sour Fish', category: 'Seafood', price: 620, description: 'Perfectly cooked fish fillet' },
    
    { id: 18, name: 'Vegetable Lo Mein', category: 'Vegetables', price: 320, description: 'Mixed vegetables in noodles' },
    { id: 19, name: 'Stir Fried Vegetables', category: 'Vegetables', price: 300, description: 'Fresh seasonal vegetables' },
  ];

  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">📖 Our Menu</h1>
          <p className="text-xl text-gray-600">Explore our delicious authentic Chinese cuisine</p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-gray-900 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-2xl text-gray-600">No items found in this category</p>
          </div>
        )}

        {/* Information Banner */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Want to Order?</h3>
          <p className="text-gray-700 mb-6">
            Contact us via phone or WhatsApp to place your order. We deliver fresh, hot food right to your door!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+92XXXXXXXXX" className="btn-primary">Call to Order</a>
            <a href="https://wa.me/" className="btn-secondary">Order on WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
