import { useState, useEffect, useCallback } from "react";
import { StorageService } from "@/lib/utils/storage";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    setFavorites(StorageService.getFavorites());
  }, []);

  const toggleFavorite = useCallback((id: number) => {
    setFavorites((prev) => {
      const newFavorites = prev.includes(id)
        ? prev.filter((fid) => fid !== id)
        : [...prev, id];

      StorageService.setFavorites(newFavorites);
      return newFavorites;
    });
  }, []);

  const isFavorite = useCallback(
    (id: number) => {
      return favorites.includes(id);
    },
    [favorites]
  );

  const clearAllFavorites = useCallback(() => {
    setFavorites([]);
    StorageService.clearFavorites();
  }, []);

  return {
    favorites,
    toggleFavorite,
    isFavorite,
    clearAllFavorites,
    favoritesCount: favorites.length,
  };
};
