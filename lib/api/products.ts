import { Product } from "@/types/product";

export const ProductService = {
  async fetchProducts(): Promise<Product[]> {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return response.json();
  },

  async fetchProductById(id: number): Promise<Product> {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }
    return response.json();
  },
};
