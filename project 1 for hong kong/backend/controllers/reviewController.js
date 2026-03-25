const Review = require('../models/Review');

exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ isApproved: true }).sort({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAverageRating = async (req, res) => {
  try {
    const reviews = await Review.find({ isApproved: true });
    if (reviews.length === 0) {
      return res.json({ average: 0, count: 0 });
    }
    const average = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
    res.json({ average: average.toFixed(1), count: reviews.length });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createReview = async (req, res) => {
  const review = new Review(req.body);
  try {
    const newReview = await review.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
