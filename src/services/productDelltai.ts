export async function fetchProductId(id: number) {
    const res = await fetch(`http://localhost:3003/products/${id}`);
    if (!res.ok) {
        throw new Error("Lỗi khi fetch API");
    }
    const data = await res.json();
    return data;
}
