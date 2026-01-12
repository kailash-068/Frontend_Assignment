import { STORAGE_KEYS } from "@/constants";

export class StorageService {
  /**
   * Check if running in browser
   */
  private static isBrowser(): boolean {
    return typeof window !== "undefined";
  }

  /**
   * Get item from localStorage with type safety
   */
  private static getItem<T>(key: string, defaultValue: T): T {
    if (!this.isBrowser()) return defaultValue;

    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(`Error reading from localStorage:`, error);
      return defaultValue;
    }
  }

  /**
   * Set item in localStorage with type safety
   */
  private static setItem<T>(key: string, value: T): void {
    if (!this.isBrowser()) return;

    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error writing to localStorage:`, error);
    }
  }

  /**
   * Remove item from localStorage
   */
  private static removeItem(key: string): void {
    if (!this.isBrowser()) return;

    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing from localStorage:`, error);
    }
  }

  // Favorites
  static getFavorites(): number[] {
    return this.getItem<number[]>(STORAGE_KEYS.FAVORITES, []);
  }

  static setFavorites(favorites: number[]): void {
    this.setItem(STORAGE_KEYS.FAVORITES, favorites);
  }

  static clearFavorites(): void {
    this.removeItem(STORAGE_KEYS.FAVORITES);
  }

  // Theme
  static getTheme(): string | null {
    if (!this.isBrowser()) return null;
    return localStorage.getItem(STORAGE_KEYS.THEME);
  }

  static setTheme(theme: string): void {
    if (!this.isBrowser()) return;
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  }
}
