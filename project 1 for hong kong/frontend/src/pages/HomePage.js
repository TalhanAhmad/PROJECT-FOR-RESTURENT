import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuCard from '../components/MenuCard';
import ReviewCard from '../components/ReviewCard';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import { getSpecialItems, getReviews, getAverageRating } from '../api/apiClient';

const HomePage = () => {
  const [specialItems, setSpecialItems] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Try to fetch from API, fall back to mock data if API fails
        try {
          const specialData = await getSpecialItems();
          setSpecialItems(specialData || getDefaultSpecialItems());
        } catch (err) {
          console.log('Using mock special items data');
          setSpecialItems(getDefaultSpecialItems());
        }

        try {
          const reviewsData = await getReviews();
          setReviews(reviewsData || getDefaultReviews());
        } catch (err) {
          console.log('Using mock reviews data');
          setReviews(getDefaultReviews());
        }

        try {
          const ratingData = await getAverageRating();
          setRating(ratingData?.averageRating || 4.7);
        } catch (err) {
          console.log('Using default rating');
          setRating(4.7);
        }
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load some data. Showing cached information.');
        // Set default data on error
        setSpecialItems(getDefaultSpecialItems());
        setReviews(getDefaultReviews());
        setRating(4.7);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getDefaultSpecialItems = () => [
    {
      id: 1,
      name: 'Hot & Sour Soup',
      description: 'Delicious hot and sour flavored soup with vegetables',
      price: 250,
      isSpecial: true,
    },
    {
      id: 2,
      name: 'Egg Fried Rice',
      description: 'Fluffy fried rice with eggs and vegetables',
      price: 350,
      isSpecial: true,
    },
    {
      id: 3,
      name: 'Chow Mein Special',
      description: 'Crispy noodles with mixed vegetables and sauce',
      price: 400,
      isSpecial: true,
    },
  ];

  const getDefaultReviews = () => [
    {
      id: 1,
      name: 'Fatima Khan',
      rating: 5,
      comment: 'Best soup since childhood! The taste is amazing and authentic.',
      source: 'Google',
    },
    {
      id: 2,
      name: 'Ali Ahmed',
      rating: 4,
      comment: 'Great taste but service needs improvement. Wait time was a bit long.',
      source: 'Google',
    },
    {
      id: 3,
      name: 'Zainab',
      rating: 5,
      comment: 'Family-friendly environment with excellent food. Highly recommended!',
      source: 'Internal',
    },
  ];

  const restaurantPhone = process.env.REACT_APP_RESTAURANT_PHONE || '+92-XXX-XXXXXXX';

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                🍜 Authentic Chinese Taste in Peshawar
              </h1>
              <p className="text-xl mb-6 text-gray-100">
                Since Years - Serving the best Chinese cuisine with authentic flavors and family-friendly environment
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`tel:${restaurantPhone}`}
                  className="btn-primary flex items-center justify-center gap-2"
                >
                  <FaPhone /> Call Now
                </a>
                <Link 
                  to="/menu"
                  className="btn-secondary flex items-center justify-center gap-2"
                >
                  View Menu
                </Link>
                <a 
                  href={`https://wa.me/${restaurantPhone.replace(/[^0-9]/g, '')}`}
                  className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold bg-green-500 hover:bg-green-600 transition"
                >
                  <FaWhatsapp /> Order on WhatsApp
                </a>
              </div>
            </div>
            
            {/* Hero Image Placeholder */}
            <div className="flex justify-center">
              <div className="text-9xl animate-bounce">🍱</div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Items Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">🌟 Our Specials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialItems.map(item => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/menu" className="btn-primary">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">⭐ What Our Customers Say</h2>
          
          {/* Average Rating */}
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-3 mb-4">
              <div className="text-5xl font-bold text-gray-900">{rating}</div>
              <div className="flex items-center gap-1">
                {[...Array(Math.round(rating))].map((_, i) => (
                  <FaStar key={i} size={24} className="text-yellow-400" />
                ))}
              </div>
            </div>
            <p className="text-gray-600 text-lg">{reviews.length}+ Happy Customers</p>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* About Quick Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">About Hong Kong Restaurant</h2>
              <p className="text-gray-700 mb-4 text-lg">
                Serving Peshawar with authentic Chinese taste for years. Our restaurant offers a family-friendly environment with traditional and modern Chinese cuisine.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li>✓ 1000+ Happy Customers</li>
                <li>✓ Authentic Chinese Recipes</li>
                <li>✓ Fresh Ingredients</li>
                <li>✓ Family-Friendly Environment</li>
                <li>✓ Fast & Reliable Service</li>
              </ul>
              <Link to="/about" className="btn-primary mt-6 inline-block">
                Learn More
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="text-9xl">👨‍🍳</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Ready to Order?</h2>
          <p className="text-xl text-gray-800 mb-8">
            Contact us today and experience authentic Chinese cuisine
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={`tel:${restaurantPhone}`}
              className="btn-primary flex items-center justify-center gap-2"
            >
              <FaPhone /> Call: {restaurantPhone}
            </a>
            <a 
              href={`https://maps.google.com/?q=Peshawar`}
              className="btn-primary flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700"
            >
              <FaMapMarkerAlt /> Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
