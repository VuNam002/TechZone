import React from 'react';
import type { Product } from '../../types/product';

interface ProductInfoProps {
    product: Product;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
    // Tính giá sau khi giảm
    const discountedPrice = product.discountPercentage 
        ? product.price * (1 - product.discountPercentage / 100)
        : product.price;
    
    const hasDiscount = product.discountPercentage && product.discountPercentage > 0;

    return (
        <div className="space-y-6">
            <div>
                <h1 className="mb-2 text-3xl font-bold text-gray-900">
                    {product.title}
                </h1>
                
                {/* Hiển thị giá */}
                <div className="flex items-center space-x-3">
                    {hasDiscount ? (
                        <>
                            {/* Giá sau khi giảm */}
                            <p className="text-2xl font-semibold text-red-600">
                                {discountedPrice?.toLocaleString("vi-VN")} VND
                            </p>
                            {/* Giá gốc bị gạch */}
                            <p className="text-lg text-gray-500 line-through">
                                {product.price?.toLocaleString("vi-VN")} VND
                            </p>
                            {/* Phần trăm giảm giá */}
                            <span className="px-2 py-1 text-sm font-medium text-white bg-red-500 rounded-md">
                                -{product.discountPercentage}%
                            </span>
                        </>
                    ) : (
                        <p className="text-2xl font-semibold text-red-600">
                            {product.price?.toLocaleString("vi-VN")} VND
                        </p>
                    )}
                </div>
            </div>

            <div>
                <h3 className="mb-2 text-lg font-semibold">Mô tả sản phẩm</h3>
                <p className="leading-relaxed text-gray-700">
                    {product.description}
                </p>
            </div>

            <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">Còn lại:</span>
                <span className={`font-semibold ${
                    product.stock > 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                    {product.stock} sản phẩm
                </span>
            </div>
        </div>
    );
};