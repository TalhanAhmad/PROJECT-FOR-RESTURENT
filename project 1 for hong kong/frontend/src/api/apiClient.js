import axios from 'axios';

// Create axios instance with base URL
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  timeout: 10000,
});

// Menu API calls
export const getMenuItems = async () => {
  try {
    const response = await API.get('/menu');
    return response.data;
  } catch (error) {
    console.error('Error fetching menu items:', error);
    throw error;
  }
};

export const getMenuByCategory = async (category) => {
  try {
    const response = await API.get(`/menu?category=${category}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching menu by category:', error);
    throw error;
  }
};

export const getSpecialItems = async () => {
  try {
    const response = await API.get('/menu/special');
    return response.data;
  } catch (error) {
    console.error('Error fetching special items:', error);
    throw error;
  }
};

// Reviews API calls
export const getReviews = async () => {
  try {
    const response = await API.get('/reviews');
    return response.data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};

export const getAverageRating = async () => {
  try {
    const response = await API.get('/reviews/rating/average');
    return response.data;
  } catch (error) {
    console.error('Error fetching average rating:', error);
    throw error;
  }
};

export const submitReview = async (reviewData) => {
  try {
    const response = await API.post('/reviews', reviewData);
    return response.data;
  } catch (error) {
    console.error('Error submitting review:', error);
    throw error;
  }
};

// Contact API calls
export const submitContactForm = async (formData) => {
  try {
    const response = await API.post('/contact', formData);
    return response.data;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};

export const getRestaurantInfo = async () => {
  try {
    const response = await API.get('/contact/info');
    return response.data;
  } catch (error) {
    console.error('Error fetching restaurant info:', error);
    throw error;
  }
};

// Orders API calls
export const createOrder = async (orderData) => {
  try {
    const response = await API.post('/orders', orderData);
    return response.data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

export const getOrderStatus = async (orderId) => {
  try {
    const response = await API.get(`/orders/${orderId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching order status:', error);
    throw error;
  }
};

export default API;
