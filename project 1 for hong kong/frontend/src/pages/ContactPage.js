import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';
import { submitContactForm } from '../api/apiClient';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const restaurantPhone = process.env.REACT_APP_RESTAURANT_PHONE || '+92-XXX-XXXXXXX';
  const restaurantEmail = process.env.REACT_APP_RESTAURANT_EMAIL || 'info@hkrest.com';
  const restaurantWhatsapp = process.env.REACT_APP_RESTAURANT_WHATSAPP || '+92-XXX-XXXXXXX';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      setError(null);
      
      // Send to backend API
      await submitContactForm(formData);
      
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Failed to send message. Please try calling us directly or using WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Have questions? We'd love to hear from you!
          </p>
        </div>

        {/* Contact Info Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="card p-6 text-center">
            <div className="text-4xl mb-3">📞</div>
            <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
            <a href={`tel:${restaurantPhone}`} className="text-red-600 hover:underline">
              {restaurantPhone}
            </a>
          </div>

          <div className="card p-6 text-center">
            <div className="text-4xl mb-3">💬</div>
            <h3 className="font-bold text-gray-900 mb-2">WhatsApp</h3>
            <a href={`https://wa.me/${restaurantWhatsapp.replace(/[^0-9]/g, '')}`} className="text-red-600 hover:underline">
              Chat with us
            </a>
          </div>

          <div className="card p-6 text-center">
            <div className="text-4xl mb-3">📧</div>
            <h3 className="font-bold text-gray-900 mb-2">Email</h3>
            <a href={`mailto:${restaurantEmail}`} className="text-red-600 hover:underline">
              {restaurantEmail}
            </a>
          </div>

          <div className="card p-6 text-center">
            <div className="text-4xl mb-3">📍</div>
            <h3 className="font-bold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-700">Mall road, Cantt, Peshawar</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            
            {submitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                ✓ Thank you! Your message has been received. We'll contact you soon.
              </div>
            )}

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                ✗ {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={loading}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 disabled:bg-gray-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={loading}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 disabled:bg-gray-200"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={loading}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 disabled:bg-gray-200"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={loading}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 disabled:bg-gray-200"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Business Hours</h2>
            
            <div className="card p-6 mb-6">
              <div className="flex items-center gap-4 mb-4">
                <FaClock className="text-red-600 text-2xl" />
                <div>
                  <h3 className="font-bold text-gray-900">Opening Hours</h3>
                  <p className="text-gray-700">11:00 AM - 3:00 PM</p>
                  <p className="text-gray-700">6:30 PM - 11:00 PM</p>
                </div>
              </div>
            </div>

            <div className="card p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Order</h3>
              <p className="text-gray-700 mb-4">
                Don't want to fill out a form? Just reach out directly:
              </p>
              <div className="space-y-3">
                <a 
                  href={`tel:${restaurantPhone}`}
                  className="flex items-center gap-3 btn-primary p-3"
                >
                  <FaPhone /> Call Now
                </a>
                <a 
                  href={`https://wa.me/${restaurantWhatsapp.replace(/[^0-9]/g, '')}`}
                  className="flex items-center gap-3 btn-secondary p-3"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Special Offer</h3>
              <div className="bg-yellow-100 border-l-4 border-yellow-600 p-4">
                <p className="font-bold text-gray-900">🎉 10% Off on Online Orders!</p>
                <p className="text-gray-700 text-sm mt-2">
                  Order through WhatsApp or call and mention "Online Order" for discount.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Find Us on Map</h2>
          <div className="card p-6">
            {process.env.REACT_APP_GOOGLE_MAPS_EMBED && process.env.REACT_APP_GOOGLE_MAPS_EMBED !== 'https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE_HERE' ? (
              <iframe
                src={process.env.REACT_APP_GOOGLE_MAPS_EMBED}
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hong Kong Chinese Restaurant Location"
              ></iframe>
            ) : (
              <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📍</div>
                  <p className="text-gray-700 text-lg font-semibold">
                    Hong Kong Chinese Restaurant<br />
                    Peshawar, Pakistan
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    (Note: To enable Google Maps, add your embed code to .env.local)
                  </p>
                  <a 
                    href="https://maps.google.com/?q=Hong+Kong+Chinese+Restaurant+Peshawar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary mt-4 inline-block"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
