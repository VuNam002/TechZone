import type { Product } from "../../types/product";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="overflow-hidden bg-white border border-gray-100 shadow-md rounded-xl">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-50 aspect-square group">
        <img
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
        />
        <div className="absolute inset-0 transition-all duration-300 bg-black/0 group-hover:bg-black/10"></div>
        
        {/* Discount Badge */}
        {product.discountPercentage && (
          <div className="absolute px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-full top-2 right-2">
            -{product.discountPercentage}%
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <h3 className="text-sm font-semibold leading-tight text-center text-gray-800 line-clamp-2">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center justify-center gap-1">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400'
                    : i < product.rating
                    ? 'text-yellow-200'
                    : 'text-gray-200'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="ml-1 text-xs text-gray-500">
            ({product.rating})
          </span>
        </div>

        {/* Price */}
        <div className="text-center">
          <div className="text-lg font-bold text-red-600">
            {product.price.toLocaleString('vi-VN')} đ
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;