import React from 'react';

interface QuantitySelectorProps {
    quantity: number;
    maxStock: number;
    onQuantityChange: (quantity: number) => void;
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({ 
    quantity, 
    maxStock, 
    onQuantityChange 
}) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (value >= 1 && value <= maxStock) {
            onQuantityChange(value);
        }
    };

    const increment = () => {
        if (quantity < maxStock) {
            onQuantityChange(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            onQuantityChange(quantity - 1);
        }
    };

    return (
        <div className="flex items-center space-x-4">
            <span className="text-sm font-medium">Số lượng:</span>
            <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                    onClick={decrement}
                    className="px-3 py-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={quantity <= 1}
                >
                    -
                </button>
                <input
                    type="number"
                    value={quantity}
                    onChange={handleInputChange}
                    className="w-16 py-2 text-center border-0 focus:outline-none"
                    min="1"
                    max={maxStock}
                />
                <button
                    onClick={increment}
                    className="px-3 py-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={quantity >= maxStock}
                >
                    +
                </button>
            </div>
        </div>
    );
};