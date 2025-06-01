export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image?: string; // Thêm field image (optional)
  description?: string; // Có thể thêm description nếu cần
}