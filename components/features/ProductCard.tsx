import React from "react";
import { Product } from "@/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Price } from "@/components/ui/Price";
import { ProductImage } from "./ProductImage";
import { FavoriteButton } from "./FavoriteButton";
import { ARIA_LABELS } from "@/constants";

interface ProductCardProps {
  product: Product;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isFavorite,
  onToggleFavorite,
  onViewDetails,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onViewDetails(product);
    }
  };

  const handleFavoriteToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onToggleFavorite(product.id);
  };

  return (
    <Card hoverable>
      <div
        role="button"
        tabIndex={0}
        onClick={() => onViewDetails(product)}
        onKeyDown={handleKeyDown}
        className="relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-t-lg"
        aria-label={`${ARIA_LABELS.VIEW_PRODUCT_DETAILS}: ${product.title}`}
      >
        <ProductImage src={product.image} alt={product.title} />

        <div
          className="absolute top-3 right-3"
          onClick={(e) => e.stopPropagation()}
        >
          <FavoriteButton
            isFavorite={isFavorite}
            onToggle={handleFavoriteToggle}
          />
        </div>
      </div>

      <div className="p-4">
        <Badge variant="primary">{product.category}</Badge>

        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mt-2 mb-3 line-clamp-2 min-h-[3rem]">
          {product.title}
        </h3>

        <div className="flex items-center justify-between mt-4">
          <Price amount={product.price} size="md" />
          <Button
            variant="primary"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
            aria-label={`${ARIA_LABELS.VIEW_PRODUCT_DETAILS}: ${product.title}`}
          >
            View Details
          </Button>
        </div>
      </div>
    </Card>
  );
};
