import { Product, SortOption } from "@/types";

/**
 * Sort products based on the selected option
 */
export const sortProducts = (
  products: Product[],
  sortBy: SortOption
): Product[] => {
  const sorted = [...products];

  switch (sortBy) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);

    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);

    case "name-asc":
      return sorted.sort((a, b) => a.title.localeCompare(b.title));

    case "name-desc":
      return sorted.sort((a, b) => b.title.localeCompare(a.title));

    default:
      return sorted;
  }
};

/**
 * Filter products based on search query and category
 */
export const filterProducts = (
  products: Product[],
  searchQuery: string,
  category: string,
  favoriteIds: number[],
  showFavoritesOnly: boolean
): Product[] => {
  let filtered = products;

  // Filter by search query
  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    filtered = filtered.filter(
      (product) =>
        product.title.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );
  }

  // Filter by category
  if (category !== "all") {
    filtered = filtered.filter((product) => product.category === category);
  }

  // Filter by favorites
  if (showFavoritesOnly) {
    filtered = filtered.filter((product) => favoriteIds.includes(product.id));
  }

  return filtered;
};

/**
 * Get unique categories from products
 */
export const getUniqueCategories = (products: Product[]): string[] => {
  const categories = new Set(products.map((p) => p.category));
  return ["all", ...Array.from(categories)];
};

/**
 * Paginate an array
 */
export const paginate = <T>(
  items: T[],
  page: number,
  itemsPerPage: number
): T[] => {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return items.slice(startIndex, endIndex);
};

/**
 * Calculate total pages
 */
export const calculateTotalPages = (
  totalItems: number,
  itemsPerPage: number
): number => {
  return Math.ceil(totalItems / itemsPerPage);
};

/**
 * Format price with currency
 */
export const formatPrice = (
  price: number,
  currency: string = "USD"
): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(price);
};

/**
 * Truncate text to specified length
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
};

/**
 * Debounce function
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};
