const BASE_URL = "http://localhost:3003/products";
export async function fetchProducts() {
    const res = await fetch (BASE_URL);
    if(!res.ok) {
        throw new Error("Lỗi khi fetch API");
    }
    const data = await res.json();
    return data;
}