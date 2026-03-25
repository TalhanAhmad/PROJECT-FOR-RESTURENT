import React from 'react';
import { FaCheck, FaUsers, FaTrophy, FaSmile } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About Hong Kong Restaurant</h1>
          <p className="text-xl text-gray-100">
            Your trusted destination for authentic Chinese cuisine in Peshawar
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4 text-lg">
                Hong Kong Chinese Restaurant has been serving the people of Peshawar for many years. What started as a small dream has grown into a beloved family establishment.
              </p>
              <p className="text-gray-700 mb-4 text-lg">
                We believe in serving authentic Chinese cuisine with fresh ingredients and traditional cooking methods. Every dish is prepared with care and passion to bring you the true taste of Chinese culinary art.
              </p>
              <p className="text-gray-700 text-lg">
                Our family-friendly environment makes us the perfect place to celebrate occasions, spend quality time with loved ones, or simply enjoy delicious food.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="text-9xl">🏮</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-red-600 mb-3">1000+</div>
              <p className="text-gray-700 font-semibold flex items-center justify-center gap-2">
                <FaSmile /> Happy Customers
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-600 mb-3">50+</div>
              <p className="text-gray-700 font-semibold">Delicious Dishes</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-600 mb-3">20+</div>
              <p className="text-gray-700 font-semibold flex items-center justify-center gap-2">
                <FaTrophy /> Years of Experience
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-600 mb-3">4.7★</div>
              <p className="text-gray-700 font-semibold">Customer Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Why Choose Us?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">🍲</div>
                <h3 className="text-2xl font-bold text-gray-900">Authentic Recipes</h3>
              </div>
              <p className="text-gray-700">
                Traditional Chinese cooking methods with recipes passed down through generations.
              </p>
            </div>

            <div className="card p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">🥬</div>
                <h3 className="text-2xl font-bold text-gray-900">Fresh Ingredients</h3>
              </div>
              <p className="text-gray-700">
                We use only the freshest ingredients, sourced daily to ensure quality and taste.
              </p>
            </div>

            <div className="card p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">👨‍👩‍👧‍👦</div>
                <h3 className="text-2xl font-bold text-gray-900">Family-Friendly</h3>
              </div>
              <p className="text-gray-700">
                A comfortable, welcoming environment perfect for families, groups, and celebrations.
              </p>
            </div>

            <div className="card p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">⚡</div>
                <h3 className="text-2xl font-bold text-gray-900">Fast Service</h3>
              </div>
              <p className="text-gray-700">
                Quick preparation and delivery without compromising on quality and taste.
              </p>
            </div>

            <div className="card p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">💰</div>
                <h3 className="text-2xl font-bold text-gray-900">Affordable Prices</h3>
              </div>
              <p className="text-gray-700">
                Great quality food at reasonable prices that won't break your budget.
              </p>
            </div>

            <div className="card p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">🎉</div>
                <h3 className="text-2xl font-bold text-gray-900">Special Offers</h3>
              </div>
              <p className="text-gray-700">
                Regular discounts and promotions for loyal customers. 10% off on online orders!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Experience Authentic Chinese Cuisine Today</h2>
          <p className="text-xl mb-8">
            Visit us or order online. We guarantee you'll love every bite!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+92XXXXXXXXX" className="btn-primary bg-white text-red-600 hover:bg-gray-100">
              Call Now
            </a>
            <a href="https://wa.me/" className="btn-secondary">
              Order on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
