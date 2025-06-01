import React, { useState } from 'react';
import type { Review } from '../../types/product';

interface ReviewFormProps {
    onSubmitReview: (review: Omit<Review, 'date'>) => void;
}

export const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmitReview }) => {
    const [formData, setFormData] = useState({
        name: '',
        rating: 5,
        comment: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!formData.name.trim() || !formData.comment.trim()) {
            alert("Vui lòng điền đầy đủ thông tin đánh giá");
            return;
        }
        
        onSubmitReview({
            reviewName: formData.name.trim(),
            rating: formData.rating,
            comment: formData.comment.trim(),
        });
        
        setFormData({ name: '', rating: 5, comment: '' });
    };

    const handleInputChange = (field: string, value: string | number) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const ratingOptions = [
        { value: 5, label: '5 sao - Rất tốt' },
        { value: 4, label: '4 sao - Tốt' },
        { value: 3, label: '3 sao - Trung bình' },
        { value: 2, label: '2 sao - Kém' },
        { value: 1, label: '1 sao - Rất kém' }
    ];

    return (
        <div className="p-6 mb-8 rounded-lg bg-gray-50">
            <h3 className="mb-4 text-lg font-semibold">Thêm đánh giá của bạn</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-2 text-sm font-medium">Tên của bạn</label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Nhập tên của bạn"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium">Đánh giá</label>
                    <select
                        value={formData.rating}
                        onChange={(e) => handleInputChange('rating', parseInt(e.target.value))}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {ratingOptions.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium">Bình luận</label>
                    <textarea
                        value={formData.comment}
                        onChange={(e) => handleInputChange('comment', e.target.value)}
                        rows={4}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Chia sẻ trải nghiệm của bạn..."
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="px-6 py-2 font-semibold text-white transition duration-200 bg-green-600 rounded-lg hover:bg-green-700"
                >
                    Gửi đánh giá
                </button>
            </form>
        </div>
    );
};