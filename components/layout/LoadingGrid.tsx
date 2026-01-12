import React from "react";
import { ProductSkeleton } from "@/components/features/ProductSkeleton";

export const LoadingGrid: React.FC = () => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      aria-busy="true"
      aria-label="Loading products"
    >
      {Array.from({ length: 8 }, (_, i) => (
        <ProductSkeleton key={i} />
      ))}
    </div>
  );
};
