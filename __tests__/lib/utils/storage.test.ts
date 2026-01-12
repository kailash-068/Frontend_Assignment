import { StorageService } from "../../../lib/utils/storage";

// Mock localStorage
const localStorageMock = (function () {
  let store: { [key: string]: string } = {};

  return {
    getItem: function (key: string) {
      return store[key] || null;
    },
    setItem: function (key: string, value: string) {
      store[key] = value.toString();
    },
    removeItem: function (key: string) {
      delete store[key];
    },
    clear: function () {
      store = {};
    },
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

describe("StorageService", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe("getFavorites", () => {
    it("returns empty array when no favorites exist", () => {
      const favorites = StorageService.getFavorites();
      expect(favorites).toEqual([]);
    });

    it("returns stored favorites", () => {
      localStorage.setItem("favorites", JSON.stringify([1, 2, 3]));
      const favorites = StorageService.getFavorites();
      expect(favorites).toEqual([1, 2, 3]);
    });

    it("returns empty array when localStorage has invalid JSON", () => {
      localStorage.setItem("favorites", "invalid json");
      const favorites = StorageService.getFavorites();
      expect(favorites).toEqual([]);
    });
  });

  describe("setFavorites", () => {
    it("stores favorites in localStorage", () => {
      StorageService.setFavorites([1, 2, 3]);
      const stored = localStorage.getItem("favorites");
      expect(stored).toBe("[1,2,3]");
    });

    it("handles empty array", () => {
      StorageService.setFavorites([]);
      const stored = localStorage.getItem("favorites");
      expect(stored).toBe("[]");
    });
  });

  describe("clearFavorites", () => {
    it("removes favorites from localStorage", () => {
      StorageService.setFavorites([1, 2, 3]);
      StorageService.clearFavorites();
      const favorites = StorageService.getFavorites();
      expect(favorites).toEqual([]);
    });
  });
});
