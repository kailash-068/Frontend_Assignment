import { useState, useEffect, useMemo } from "react";
import { Product, FilterState, SortOption } from "@/types";
import { ProductService } from "@/lib/api/products";
import {
  filterProducts,
  sortProducts,
  getUniqueCategories,
} from "@/lib/utils/helpers";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [filters, setFilters] = useState<FilterState>({
    searchQuery: "",
    selectedCategory: "all",
    showFavoritesOnly: false,
    sortBy: "default",
  });

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await ProductService.fetchProducts();
      setProducts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  const categories = useMemo(() => getUniqueCategories(products), [products]);

  const updateFilters = (updates: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...updates }));
  };

  const setSearchQuery = (searchQuery: string) => {
    updateFilters({ searchQuery });
  };

  const setSelectedCategory = (selectedCategory: string) => {
    updateFilters({ selectedCategory });
  };

  const setShowFavoritesOnly = (showFavoritesOnly: boolean) => {
    updateFilters({ showFavoritesOnly });
  };

  const setSortBy = (sortBy: SortOption) => {
    updateFilters({ sortBy });
  };

  return {
    products,
    loading,
    error,
    filters,
    categories,
    setSearchQuery,
    setSelectedCategory,
    setShowFavoritesOnly,
    setSortBy,
    loadProducts,
  };
};

export const useFilteredProducts = (
  products: Product[],
  filters: FilterState,
  favoriteIds: number[]
): Product[] => {
  return useMemo(() => {
    const filtered = filterProducts(
      products,
      filters.searchQuery,
      filters.selectedCategory,
      favoriteIds,
      filters.showFavoritesOnly
    );

    return sortProducts(filtered, filters.sortBy);
  }, [products, filters, favoriteIds]);
};
