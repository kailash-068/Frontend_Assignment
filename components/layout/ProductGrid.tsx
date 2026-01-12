import React from "react";
import { Product } from "@/types";
import { ProductCard } from "@/components/features/ProductCard";

interface ProductGridProps {
  products: Product[];
  favorites: number[];
  onToggleFavorite: (id: number) => void;
  onViewDetails: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  favorites,
  onToggleFavorite,
  onViewDetails,
}) => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      role="list"
    >
      {products.map((product) => (
        <div key={product.id} role="listitem">
          <ProductCard
            product={product}
            isFavorite={favorites.includes(product.id)}
            onToggleFavorite={onToggleFavorite}
            onViewDetails={onViewDetails}
          />
        </div>
      ))}
    </div>
  );
};
