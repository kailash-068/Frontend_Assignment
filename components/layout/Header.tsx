import React from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { SearchBar } from "@/components/features/SearchBar";
import { CategoryFilter } from "@/components/features/CategoryFilter";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  favoritesCount: number;
  showFavoritesOnly: boolean;
  onToggleFavoritesView: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearchChange,
  categories,
  selectedCategory,
  onCategoryChange,
  favoritesCount,
  showFavoritesOnly,
  onToggleFavoritesView,
}) => {
  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Product Explorer
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Discover amazing products
            </p>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />

            <Button
              variant={showFavoritesOnly ? "primary" : "secondary"}
              onClick={onToggleFavoritesView}
              icon={
                <Heart
                  className={`w-5 h-5 ${
                    showFavoritesOnly ? "fill-current" : ""
                  }`}
                />
              }
            >
              Favorites ({favoritesCount})
            </Button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <SearchBar
            value={searchQuery}
            onChange={onSearchChange}
            placeholder="Search products..."
          />
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={onCategoryChange}
          />
        </div>
      </div>
    </header>
  );
};
