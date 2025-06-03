import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"; // Thêm import
import { addToCart } from "../features/cart/cartSlice"; // Thêm import
import Header from "../components/layout/Header";
import { ImageGallery } from "../components/utils/ImageGallery";
import { ProductInfo } from "../components/utils/ProductInfo";
import { QuantitySelector } from "../components/utils/QuantitySelector";
import { ReviewForm } from "../components/utils/ReviewForm";
import { ReviewsList } from "../components/utils/ReviewsList";
import { LoadingState } from "../components/utils/LoadingState";
import { ErrorState } from "../components/utils/ErrorState";
import { useProductData } from "../hook/useProductData";
import type { Review } from "../types/product";
import type { CartItem } from "../types/cartItem"; // Thêm import
import Footer from "../components/layout/Footer";

function ProductDetail(): React.ReactElement {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const dispatch = useDispatch(); // Thêm dispatch
    const { product, loading, error, refetch } = useProductData(id);
    
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        if (product) {
            setReviews(product.reviews || []);
            setSelectedImage(0);
            setQuantity(1);
        }
    }, [product]);

    const handleSearch = (searchTerm: string) => {
        if (searchTerm.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
        }
    };

    const handleBuyNow = () => {
        if (product && quantity > 0) {
            // Tạo CartItem từ thông tin sản phẩm
            const cartItem: CartItem = {
                id: product.id,
                title: product.title,
                price: product.price,
                quantity: quantity,
                // Thêm các field khác nếu cần (ảnh, description...)
                image: product.images?.[0] || '', // Lấy ảnh đầu tiên
            };

            // Dispatch action để thêm vào giỏ hàng
            dispatch(addToCart(cartItem));
            
            // Hiển thị thông báo thành công
            alert(`Đã thêm ${quantity} sản phẩm "${product.title}" vào giỏ hàng!`);
            
            // Có thể redirect đến trang giỏ hàng
            navigate('/cart');
        }
    };

    const handleSubmitReview = (reviewData: Omit<Review, 'date'>) => {
        const newReview: Review = {
            ...reviewData,
            date: new Date().toLocaleDateString("vi-VN"),
        };
        
        setReviews([newReview, ...reviews]);
        alert("Đánh giá của bạn đã được thêm!");
    };

    if (loading) return <LoadingState onSearch={handleSearch} />;
    if (error) return <ErrorState error={error} onSearch={handleSearch} onRetry={refetch} />;
    if (!product) return <ErrorState error="Không tìm thấy sản phẩm" onSearch={handleSearch} />;

    return (
        <>
        <div className="min-h-screen bg-gray-50">
            <Header onSearch={handleSearch} />
            
            <div className="container px-4 py-8 mx-auto mt-8">
                <div className="p-6 bg-white rounded-lg shadow-md">
                    {/* Product Details Section */}
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        <ImageGallery
                            images={product.images}
                            title={product.title}
                            selectedImage={selectedImage}
                            onImageSelect={setSelectedImage}
                        />

                        <div className="space-y-6">
                            <ProductInfo product={product} />

                            <div className="space-y-4">
                                <QuantitySelector
                                    quantity={quantity}
                                    maxStock={product.stock}
                                    onQuantityChange={setQuantity}
                                />

                                <button
                                    onClick={handleBuyNow}
                                    className="w-full px-6 py-3 font-semibold text-white transition duration-200 rounded-lg bg-my-red hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                                    disabled={product.stock === 0}
                                >
                                    {product.stock === 0 ? "Hết hàng" : "Thêm vào giỏ hàng"}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Reviews Section */}
                    <div className="pt-8 mt-12 border-t">
                        <h2 className="mb-6 text-2xl font-bold">Đánh giá sản phẩm</h2>
                        <ReviewForm onSubmitReview={handleSubmitReview} />
                        <ReviewsList reviews={reviews} />
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default ProductDetail;