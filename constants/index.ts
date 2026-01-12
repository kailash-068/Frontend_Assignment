export const ITEMS_PER_PAGE = 12;

export const SORT_OPTIONS = [
  { value: "default", label: "Default" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A to Z" },
  { value: "name-desc", label: "Name: Z to A" },
] as const;

export const STORAGE_KEYS = {
  FAVORITES: "favorites",
  THEME: "theme",
} as const;

export const ARIA_LABELS = {
  SKIP_TO_CONTENT: "Skip to main content",
  SEARCH_PRODUCTS: "Search products",
  FILTER_BY_CATEGORY: "Filter by category",
  SORT_PRODUCTS: "Sort products",
  TOGGLE_FAVORITES: "Toggle favorites view",
  TOGGLE_THEME: "Toggle dark mode",
  ADD_TO_FAVORITES: "Add to favorites",
  REMOVE_FROM_FAVORITES: "Remove from favorites",
  VIEW_PRODUCT_DETAILS: "View product details",
  BACK_TO_PRODUCTS: "Back to products",
  PREVIOUS_PAGE: "Previous page",
  NEXT_PAGE: "Next page",
} as const;
