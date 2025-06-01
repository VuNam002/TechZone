import { useState, useEffect } from 'react';
import type { Product } from '../types/product';
import { fetchProductId } from '../services/productDelltai';

export const useProductData = (id: string | undefined) => {
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const loadProduct = async () => {
        if (!id) {
            setError("ID sản phẩm không hợp lệ");
            setLoading(false);
            return;
        }

        try {
            setLoading(true);
            setError("");
            
            const productId = parseInt(id);
            if (isNaN(productId)) {
                throw new Error("Invalid product ID");
            }

            const data = await fetchProductId(productId);
            setProduct(data);
        } catch (err) {
            console.error("Lỗi khi tải sản phẩm: ", err);
            setError("Không thể tải thông tin sản phẩm");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadProduct();
    }, [id]);

    return { product, loading, error, refetch: loadProduct };
};
