"use client";

import React, { useEffect } from "react";
import { ShoppingBag } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { ProductGrid } from "@/components/layout/ProductGrid";
import { LoadingGrid } from "@/components/layout/LoadingGrid";
import { ProductDetail } from "@/components/layout/ProductDetail";
import { EmptyState } from "@/components/features/EmptyState";
import { ErrorState } from "@/components/features/ErrorState";
import { Pagination } from "@/components/ui/Pagination";
import { useProducts, useFilteredProducts } from "@/lib/hooks/useProducts";
import { useFavorites } from "@/lib/hooks/useFavorites";
import { usePagination } from "@/lib/hooks/usePagination";
import { paginate } from "@/lib/utils/helpers";
import { Product } from "@/types";
import { ITEMS_PER_PAGE } from "@/constants";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(
    null
  );

  // Custom hooks for state management
  const {
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
  } = useProducts();

  const { favorites, toggleFavorite, favoritesCount } = useFavorites();

  // Get filtered and sorted products
  const filteredProducts = useFilteredProducts(products, filters, favorites);

  // Pagination
  const pagination = usePagination({
    totalItems: filteredProducts.length,
    itemsPerPage: ITEMS_PER_PAGE,
  });

  // Reset pagination when filters change
  useEffect(() => {
    pagination.resetPagination();
  }, [
    filters.searchQuery,
    filters.selectedCategory,
    filters.showFavoritesOnly,
    filters.sortBy,
  ]);

  // Get paginated products
  const paginatedProducts = paginate(
    filteredProducts,
    pagination.currentPage,
    ITEMS_PER_PAGE
  );

  // Handlers
  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleBackToList = () => {
    setSelectedProduct(null);
  };

  // Error state
  if (error) {
    return <ErrorState message={error} onRetry={loadProducts} />;
  }

  // Detail view
  if (selectedProduct) {
    return (
      <ProductDetail
        product={selectedProduct}
        isFavorite={favorites.includes(selectedProduct.id)}
        onToggleFavorite={toggleFavorite}
        onBack={handleBackToList}
      />
    );
  }

  // Main view
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header
        searchQuery={filters.searchQuery}
        onSearchChange={setSearchQuery}
        categories={categories}
        selectedCategory={filters.selectedCategory}
        onCategoryChange={setSelectedCategory}
        favoritesCount={favoritesCount}
        showFavoritesOnly={filters.showFavoritesOnly}
        onToggleFavoritesView={() =>
          setShowFavoritesOnly(!filters.showFavoritesOnly)
        }
      />

      <main
        id="main-content"
        className="max-w-7xl mx-auto px-4 py-8"
        role="main"
      >
        {loading ? (
          <div role="status" aria-live="polite" aria-label="Loading products">
            <LoadingGrid />
            <span className="sr-only">Loading products...</span>
          </div>
        ) : filteredProducts.length === 0 ? (
          <EmptyState
            icon={<ShoppingBag className="w-16 h-16" />}
            title="No products found"
            message={
              filters.showFavoritesOnly
                ? "No favorites yet. Start adding products you love!"
                : filters.searchQuery || filters.selectedCategory !== "all"
                ? "No products match your filters. Try adjusting your search."
                : "No products available at the moment."
            }
          />
        ) : (
          <>
            <div
              className="flex items-center justify-between mb-6"
              role="status"
              aria-live="polite"
              aria-atomic="true"
            >
              <p className="text-gray-600 dark:text-gray-400">
                Showing{" "}
                <span className="font-semibold">{filteredProducts.length}</span>{" "}
                {filteredProducts.length === 1 ? "product" : "products"}
              </p>
            </div>

            <div
              role="region"
              aria-label="Product list"
              className="focus:outline-none"
              tabIndex={-1}
            >
              <ProductGrid
                products={paginatedProducts}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
                onViewDetails={handleViewDetails}
              />
            </div>

            <Pagination
              paginationInfo={pagination.paginationInfo}
              onPageChange={pagination.goToPage}
              hasNextPage={pagination.hasNextPage}
              hasPreviousPage={pagination.hasPreviousPage}
            />
          </>
        )}
      </main>
    </div>
  );
}
