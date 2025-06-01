import React from 'react';

interface StarRatingProps {
    rating: number;
    size?: 'sm' | 'md' | 'lg';
}

export const StarRating: React.FC<StarRatingProps> = ({ rating, size = 'md' }) => {
    const sizeClasses = {
        sm: 'text-sm',
        md: 'text-xl',
        lg: 'text-2xl'
    };

    return (
        <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    className={`${sizeClasses[size]} ${
                        star <= rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                >
                    ★
                </span>
            ))}
        </div>
    );
};