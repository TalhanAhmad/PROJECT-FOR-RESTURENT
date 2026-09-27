hello
hello
hello
hello




import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-600">🍜 Hong Kong Restaurant</h3>
            <p className="text-gray-300 text-sm">
              Serving Peshawar with authentic Chinese taste for years. Quality food, great taste, happy customers.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex items-center gap-3">
                <FaPhone className="text-red-600" />
                <a href="tel:+92XXXXXXXXX" className="hover:text-red-600">+92-XXX-XXXXXXX</a>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-red-600" />
                <a href="mailto:info@hkrest.com" className="hover:text-red-600">info@hkrest.com</a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold mb-4">Hours</h4>
            <div className="space-y-2 text-gray-300 text-sm">
              <div className="flex items-center gap-3">
                <FaClock className="text-red-600" />
                <div>
                  <p>11:00 AM - 3:00 PM</p>
                  <p>6:30 PM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-lg font-bold mb-4">Location</h4>
            <div className="text-gray-300 text-sm space-y-2">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-red-600 mt-1" />
                <p>Peshawar, Pakistan</p>
              </div>
              <div className="flex gap-3 mt-4">
                <a href="#" className="hover:text-red-600"><FaFacebook size={20} /></a>
                <a href="#" className="hover:text-red-600"><FaInstagram size={20} /></a>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 mb-6" />

        <div className="text-center text-gray-400 text-sm">
          <p>&copy; 2026 Hong Kong Chinese Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
