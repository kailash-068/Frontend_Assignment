export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface AppState {
  products: Product[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
  selectedCategory: string;
  favorites: number[];
  showFavoritesOnly: boolean;
  selectedProduct: Product | null;
  viewMode: "list" | "detail";
}
