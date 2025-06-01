import React from 'react';
import type { Review } from '../../types/product';
import { StarRating } from './StarRating';

interface ReviewItemProps {
    review: Review;
}

export const ReviewItem: React.FC<ReviewItemProps> = ({ review }) => {
    return (
        <div className="p-6 border border-gray-200 rounded-lg">
            <div className="flex items-start justify-between mb-3">
                <div>
                    <h4 className="font-semibold text-gray-900">{review.reviewName}</h4>
                    <StarRating rating={review.rating} size="sm" />
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
            </div>
            <p className="leading-relaxed text-gray-700">{review.comment}</p>
        </div>
    );
};