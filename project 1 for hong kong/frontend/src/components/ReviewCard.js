import React from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewCard = ({ review }) => {
  return (
    <div className="card p-6 border-l-4 border-yellow-400">
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-bold text-gray-900">{review.name || 'Customer'}</h4>
        <div className="flex items-center gap-1">
          {[...Array(review.rating || 5)].map((_, i) => (
            <FaStar key={i} size={16} className="text-yellow-400" />
          ))}
        </div>
      </div>
      <p className="text-gray-700 italic">"{review.comment || 'Great food!'}"</p>
      {review.source && (
        <p className="text-gray-500 text-sm mt-3">- {review.source}</p>
      )}
    </div>
  );
};

export default ReviewCard;
