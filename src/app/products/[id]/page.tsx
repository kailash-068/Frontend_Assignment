"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Product } from "@/types";
import { ProductService } from "@/lib/api/products";
import { StorageService } from "@/lib/utils/storage";
import { ProductDetail } from "@/components/layout/ProductDetail";
import { ErrorState } from "@/components/features/ErrorState";

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    setFavorites(StorageService.getFavorites());
    loadProduct();
  }, [params.id]);

  const loadProduct = async () => {
    setLoading(true);
    setError(null);

    try {
      const id = parseInt(params.id as string, 10);

      if (isNaN(id)) {
        throw new Error("Invalid product ID");
      }

      const data = await ProductService.fetchProductById(id);
      setProduct(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load product");
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = (id: number) => {
    const newFavorites = favorites.includes(id)
      ? favorites.filter((fid) => fid !== id)
      : [...favorites, id];

    setFavorites(newFavorites);
    StorageService.setFavorites(newFavorites);
  };

  const goBack = () => {
    router.push("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Loading product...
          </p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <ErrorState
        message={error || "Product not found"}
        onRetry={loadProduct}
      />
    );
  }

  return (
    <ProductDetail
      product={product}
      isFavorite={favorites.includes(product.id)}
      onToggleFavorite={toggleFavorite}
      onBack={goBack}
    />
  );
}
