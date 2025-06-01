import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TiShoppingCart } from "react-icons/ti";
import {  
  removeFromCart, 
  updateQuantity, 
  clearCart, 
  saveCart 
} from '../../features/cart/cartSlice';
import type { RootState } from '../../store/store';
import Header from "../../components/layout/Header";

const CartComponent: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const status = useSelector((state: RootState) => state.cart.status);

  const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0); //total là biến lưu tổng tạm thời, quantity số lượng sản phẩm trong giỏ
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0); // tính tổng số lượng món hàng trong giỏ

  const handleUpdateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    if (window.confirm('Bạn có chắc chắn muốn xóa toàn bộ giỏ hàng?')) {
      dispatch(clearCart());
    }
  };

  const handleSaveCart = () => {
    dispatch(saveCart(cartItems));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  };

  if (cartItems.length === 0) {
    return (
      <div>
        <Header onSearch={()=>{}}/>
        <div className="min-h-screen bg-gray-50">
          <div className="container px-2 py-4 mx-auto sm:px-4 sm:py-8">
            <div className="p-4 text-center bg-white rounded-lg shadow-md sm:p-8">
              <div className="flex justify-center mb-4 text-4xl sm:text-6xl"><TiShoppingCart/></div>
              <h2 className="mb-2 text-xl font-bold sm:text-2xl">Giỏ hàng trống</h2>
              <p className="mb-6 text-sm text-gray-600 sm:text-base">Chưa có sản phẩm nào trong giỏ hàng của bạn</p>
              <button 
                onClick={() => window.history.back()}
                className="px-4 py-2 text-sm text-white transition duration-200 bg-blue-600 rounded-lg sm:px-6 sm:py-3 sm:text-base hover:bg-my-red"
              >
                Tiếp tục mua sắm
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container p-4 px-2 py-4 mx-auto sm:px-4 sm:py-8">
        <div className="max-w-screen-lg m-20 mx-auto bg-white rounded-lg shadow-md">
          <Header onSearch={()=>{}}/>
          
          {/* Header */}
          <div className="p-3 border-b mt-9 sm:p-6">
            <div className="flex items-center justify-between">
              <h1 className="flex items-center text-lg font-bold sm:text-2xl">
                🛒 Giỏ hàng ({totalItems})
              </h1>
              <button
                onClick={handleClearCart}
                className="px-2 py-1 text-xs text-red-600 transition duration-200 border border-red-600 rounded-lg sm:px-4 sm:py-2 sm:text-sm hover:bg-red-50"
                disabled={status === 'loading'}
              >
                Xóa tất cả
              </button>
            </div>
          </div>

          {/* Cart Items */}
          <div className="p-3 sm:p-6">
            <div className="space-y-3 sm:space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex flex-col items-start gap-3 p-3 border rounded-lg sm:flex-row sm:items-center sm:gap-4 sm:p-4">
                  
                  {/* Mobile Layout: Image + Info + Remove Button */}
                  <div className="flex items-center w-full gap-3 sm:flex-1">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="flex-shrink-0 object-cover w-16 h-16 rounded-lg sm:w-20 sm:h-20"
                      />
                    )}
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold sm:text-lg line-clamp-2">{item.title}</h3>
                      <p className="text-sm font-bold text-blue-600 sm:text-base">
                        {formatCurrency(item.price)}
                      </p>
                    </div>
                    
                    {/* Remove Button - Mobile */}
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-red-600 transition duration-200 bg-red-100 rounded-full sm:w-8 sm:h-8 hover:bg-red-200 sm:hidden"
                      disabled={status === 'loading'}
                      title="Xóa sản phẩm"
                    >
                      ×
                    </button>
                  </div>

                  {/* Mobile Layout: Quantity + Total + Desktop Remove Button */}
                  <div className="flex items-center justify-between w-full sm:w-auto sm:gap-4">
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                        className="flex items-center justify-center text-sm transition duration-200 bg-gray-200 rounded-full w-7 h-7 sm:w-8 sm:h-8 hover:bg-gray-300"
                        disabled={status === 'loading'}
                      >
                        −
                      </button>
                      <span className="w-8 text-sm font-semibold text-center sm:w-12 sm:text-base">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                        className="flex items-center justify-center text-sm transition duration-200 bg-gray-200 rounded-full w-7 h-7 sm:w-8 sm:h-8 hover:bg-gray-300"
                        disabled={status === 'loading'}
                      >
                        +
                      </button>
                    </div>

                    {/* Item Total */}
                    <div className="text-right">
                      <p className="text-sm font-bold sm:text-lg">
                        {formatCurrency(item.price * item.quantity)}
                      </p>
                    </div>

                    {/* Remove Button - Desktop */}
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="items-center justify-center hidden w-8 h-8 text-red-600 transition duration-200 bg-red-100 rounded-full sm:flex hover:bg-red-200"
                      disabled={status === 'loading'}
                      title="Xóa sản phẩm"
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="pt-4 mt-6 border-t sm:pt-6 sm:mt-8">
              <div className="flex items-center justify-between mb-4 text-lg font-bold sm:mb-6 sm:text-xl">
                <span>Tổng cộng:</span>
                <span className="text-my-red">{formatCurrency(totalAmount)}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <button
                  onClick={handleSaveCart}
                  className="w-full px-4 py-3 text-sm text-white transition duration-200 rounded-lg bg-my-red sm:flex-1 sm:px-6 sm:text-base hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? '⏳ Đang lưu...' : '💾 Lưu giỏ hàng'}
                </button>
                
                <button
                  onClick={() => {
                    alert('Tính năng thanh toán sẽ được phát triển sau!');
                  }}
                  className="w-full px-4 py-3 text-sm text-white transition duration-200 bg-blue-600 rounded-lg sm:flex-1 sm:px-6 sm:text-base hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  disabled={status === 'loading'}
                >
                  🛒 Thanh toán
                </button>
              </div>

              {/* Status Messages */}
              <div className="mt-4">
                {status === 'succeeded' && (
                  <p className="flex items-center text-sm font-semibold text-green-600 sm:text-base">
                    ✅ Đã lưu giỏ hàng thành công!
                  </p>
                )}
                {status === 'failed' && (
                  <p className="flex items-center text-sm font-semibold text-red-600 sm:text-base">
                    ❌ Có lỗi khi lưu giỏ hàng
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;