export type SortOption =
  | "default"
  | "price-asc"
  | "price-desc"
  | "name-asc"
  | "name-desc";

export type Theme = "light" | "dark";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

export type ButtonSize = "sm" | "md" | "lg";

export type BadgeVariant = "default" | "primary" | "success" | "warning";

export type PriceSize = "sm" | "md" | "lg" | "xl";

export type RatingSize = "sm" | "md" | "lg";

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
}

export interface FilterState {
  searchQuery: string;
  selectedCategory: string;
  showFavoritesOnly: boolean;
  sortBy: SortOption;
}
