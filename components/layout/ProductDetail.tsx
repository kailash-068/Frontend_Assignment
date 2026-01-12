import React from "react";
import { ArrowLeft, Heart, ShoppingBag } from "lucide-react";
import { Product } from "@/types";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Price } from "@/components/ui/Price";
import { Rating } from "@/components/ui/Rating";
import { Card } from "@/components/ui/Card";
import { ProductImage } from "@/components/features/ProductImage";
import { ARIA_LABELS } from "@/constants";

interface ProductDetailProps {
  product: Product;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
  onBack: () => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({
  product,
  isFavorite,
  onToggleFavorite,
  onBack,
}) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={onBack}
          icon={<ArrowLeft className="w-5 h-5" />}
          className="mb-6 group"
          aria-label={ARIA_LABELS.BACK_TO_PRODUCTS}
        >
          Back to Products
        </Button>

        <Card className="p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Image */}
            <ProductImage
              src={product.image}
              alt={product.title}
              containerClassName="bg-gray-50 dark:bg-gray-700 rounded-lg"
            />

            {/* Product Info */}
            <div className="flex flex-col">
              <Badge variant="primary">{product.category}</Badge>

              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-2 mb-4">
                {product.title}
              </h1>

              <div className="flex items-baseline gap-4 mb-6">
                <Price amount={product.price} size="xl" />
                <Rating
                  rate={product.rating.rate}
                  count={product.rating.count}
                  size="lg"
                />
              </div>

              <div className="border-t border-b border-gray-200 dark:border-gray-700 py-6 mb-6">
                <h2 className="font-semibold text-lg mb-3 text-gray-900 dark:text-gray-100">
                  Description
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="flex gap-3 mt-auto">
                <Button
                  variant={isFavorite ? "primary" : "secondary"}
                  onClick={() => onToggleFavorite(product.id)}
                  icon={
                    <Heart
                      className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`}
                    />
                  }
                  className="flex-1"
                  aria-label={
                    isFavorite
                      ? ARIA_LABELS.REMOVE_FROM_FAVORITES
                      : ARIA_LABELS.ADD_TO_FAVORITES
                  }
                >
                  {isFavorite ? "Saved" : "Save"}
                </Button>

                <Button
                  variant="primary"
                  icon={<ShoppingBag className="w-5 h-5" />}
                  className="flex-1"
                  aria-label="Add to cart"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
