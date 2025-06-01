import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { CartItem } from '../../types/cartItem';
import type { PayloadAction } from '@reduxjs/toolkit';

type CartState = {
  items: CartItem[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

// Trạng thái khởi tạo
const initialState: CartState = {
  items: [],
  status: 'idle',
  error: null,
};

// Gửi cart lên server
export const saveCart = createAsyncThunk(
  'cart/saveCart',
  async (cart: CartItem[]) => {
    const response = await fetch('http://localhost:3003/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cart)
    });
    if (!response.ok) throw new Error('Không thể lưu giỏ hàng');
    return cart;
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      const existing = state.items.find(i => i.id === item.id);
      if (existing) {
        existing.quantity += item.quantity;
      } else {
        state.items.push(item);
      }
    },
    
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    },
    
    // Thêm action updateQuantity
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(i => i.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
    
    clearCart: (state) => {
      state.items = [];
    },

    // Thêm action để reset status (optional)
    resetStatus: (state) => {
      state.status = 'idle';
      state.error = null;
    }
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(saveCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(saveCart.fulfilled, (state) => {
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(saveCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Đã có lỗi';
      });
  }
});

export const { 
  addToCart, 
  removeFromCart, 
  updateQuantity, 
  clearCart, 
  resetStatus 
} = cartSlice.actions;

export default cartSlice.reducer;