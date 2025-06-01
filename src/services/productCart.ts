import type { CartItem } from './../types/cartItem';

export async function fetchProductCart(cart: CartItem[]): Promise<void> {
  try {
    const response = await fetch('http://localhost:3003/cart', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cart)
    });

    if (!response.ok) {
      throw new Error('Không lưu được giỏ hàng');
    }

    console.log('Đã lưu giỏ hàng thành công');
  } catch (error) {
    console.error('Lỗi lưu giỏ hàng', error);
  }
}
