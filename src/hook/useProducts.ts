import { useEffect, useState } from "react";
import type { Product } from "../types/product";
import { fetchProducts } from "../services/productServices";

type SortOption = 'default' | 'price-asc' | 'price-desc' | 'rating-desc';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<SortOption>('default');
  const [originalOrder, setOriginalOrder] = useState<Product[]>([]);//lưu danh sách ban đầu để khi chọn default có thể hồi phục danh sách gốc

  // Phân trang
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(45);
  const [paginatedProducts, setPaginatedProducts] = useState<Product[]>([]);//danh sách sản phẩm tương ứng với trang hiện tại.

  // Tính toán phân trang
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const totalItems = filteredProducts.length;

  useEffect(() => {
    async function loadingData() {
      try {
        const data: Product[] = await fetchProducts();
        setProducts(data);
        setFilteredProducts(data);
        setOriginalOrder(data);
        const brandList = [...new Set(data.map((p) => p.brand))];
        setBrands(brandList);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    loadingData();
  }, []);

  const sortProducts = (products: Product[], option: SortOption): Product[] => {
    const sortedProducts = [...products];
        
    switch (option) {
      case 'price-asc':
        return sortedProducts.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return sortedProducts.sort((a, b) => b.price - a.price);
      case 'rating-desc':
        return sortedProducts.sort((a, b) => b.rating - a.rating);
      case 'default':
        return sortedProducts.sort((a, b) => {
          const indexA = originalOrder.findIndex(p => p.id === a.id);
          const indexB = originalOrder.findIndex(p => p.id === b.id);
          return indexA - indexB;
        });
      default:
        return sortedProducts;
    }
  };

  // Cập nhật phân trang khi filteredProducts hoặc currentPage thay đổi
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedProducts(filteredProducts.slice(startIndex, endIndex));
  }, [filteredProducts, currentPage, itemsPerPage]);

  useEffect(() => {
    const sorted = sortProducts(filteredProducts, sortOption);
    setFilteredProducts(sorted);
  }, [sortOption, originalOrder]);

  const handleSearch = (keyword: string) => {
    const filtered = keyword === ""
      ? products
      : products.filter((p) =>
          p.title.toLowerCase().includes(keyword.toLowerCase())
        );
    const sorted = sortProducts(filtered, sortOption);
    setFilteredProducts(sorted);
    setCurrentPage(1); // Reset về trang 1
  };

  const handleBrandSelect = (brand: string) => {
    const filter = brand === "Tất cả" 
      ? products 
      : products.filter((p) => p.brand === brand);
    const sorted = sortProducts(filter, sortOption);
    setFilteredProducts(sorted);
    setCurrentPage(1); // Reset về trang 1
  };

  const handleSortChange = (option: SortOption) => {
    setSortOption(option);
    setCurrentPage(1); // Reset về trang 1
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
    setCurrentPage(1);
  };

  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const goToLastPage = () => {
    setCurrentPage(totalPages);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return {
    products,
    loading,
    filteredProducts,
    paginatedProducts, // Sản phẩm của trang hiện tại
    brands,
    sortOption,
    currentPage,
    totalPages,
    totalItems,
    itemsPerPage,
    handleSearch,
    handleBrandSelect,
    handleSortChange,
    handlePageChange,
    handleItemsPerPageChange,
    goToFirstPage,
    goToLastPage,
    goToPreviousPage,
    goToNextPage,
    canGoToPrevious: currentPage > 1,
    canGoToNext: currentPage < totalPages,
  };
}