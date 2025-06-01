export type Product = {
  id: number;
  title: string;
  price: number;
  brand: string;
  category: string;
  thumbnail: string;
  rating: number;
  discountPercentage: number;
  description: string;
  images: string[];
  stock: number;
  reviews?: Review[];
};
export interface Review {
  reviewName: string;
  rating: number;
  comment: string;
  date: string;
}
