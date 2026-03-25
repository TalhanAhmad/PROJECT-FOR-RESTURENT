import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const restaurantPhone = '+92-XXX-XXXXXXX';
  const restaurantWhatsapp = '+92-XXX-XXXXXXX';

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-red-600">
            🍜 Hong Kong Restaurant
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="hover:text-red-600 transition">Home</Link>
            <Link to="/menu" className="hover:text-red-600 transition">Menu</Link>
            <Link to="/about" className="hover:text-red-600 transition">About</Link>
            <Link to="/contact" className="hover:text-red-600 transition">Contact</Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex space-x-3">
            <a 
              href={`tel:${restaurantPhone}`}
              className="flex items-center gap-2 btn-primary text-sm"
            >
              <FaPhone size={16} /> Call Now
            </a>
            <a 
              href={`https://wa.me/${restaurantWhatsapp.replace(/[^0-9]/g, '')}`}
              className="flex items-center gap-2 btn-secondary text-sm text-gray-900"
            >
              <FaWhatsapp size={16} /> WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link to="/" className="block hover:text-red-600">Home</Link>
            <Link to="/menu" className="block hover:text-red-600">Menu</Link>
            <Link to="/about" className="block hover:text-red-600">About</Link>
            <Link to="/contact" className="block hover:text-red-600">Contact</Link>
            <div className="space-y-2 pt-2">
              <a 
                href={`tel:${restaurantPhone}`}
                className="block btn-primary text-center"
              >
                <FaPhone size={16} className="inline mr-2" /> Call Now
              </a>
              <a 
                href={`https://wa.me/${restaurantWhatsapp.replace(/[^0-9]/g, '')}`}
                className="block btn-secondary text-center"
              >
                <FaWhatsapp size={16} className="inline mr-2" /> WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
