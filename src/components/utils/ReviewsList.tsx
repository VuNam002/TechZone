import React from 'react';
import type { Review } from '../../types/product';
import { ReviewItem } from './ReviewItem';

interface ReviewsListProps {
    reviews: Review[];
}

export const ReviewsList: React.FC<ReviewsListProps> = ({ reviews }) => {
    return (
        <div className="space-y-6">
            {reviews.length === 0 ? (
                <div className="py-12 text-center">
                    <p className="text-lg text-gray-500">Chưa có đánh giá nào cho sản phẩm này</p>
                    <p className="mt-2 text-sm text-gray-400">Hãy là người đầu tiên đánh giá!</p>
                </div>
            ) : (
                <>
                    <div className="mb-4">
                        <p className="text-sm text-gray-600">
                            Tổng cộng: <span className="font-semibold">{reviews.length}</span> đánh giá
                        </p>
                    </div>
                    {reviews.map((review, index) => (
                        <ReviewItem key={index} review={review} />
                    ))}
                </>
            )}
        </div>
    );
};