import { useState, useCallback, useMemo } from "react";
import { PaginationInfo } from "@/types";
import { calculateTotalPages } from "@/lib/utils/helpers";

interface UsePaginationProps {
  totalItems: number;
  itemsPerPage: number;
  initialPage?: number;
}

export const usePagination = ({
  totalItems,
  itemsPerPage,
  initialPage = 1,
}: UsePaginationProps) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const totalPages = useMemo(
    () => calculateTotalPages(totalItems, itemsPerPage),
    [totalItems, itemsPerPage]
  );

  const goToPage = useCallback(
    (page: number) => {
      const validPage = Math.max(1, Math.min(page, totalPages));
      setCurrentPage(validPage);

      // Scroll to top when changing pages
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [totalPages]
  );

  const nextPage = useCallback(() => {
    goToPage(currentPage + 1);
  }, [currentPage, goToPage]);

  const previousPage = useCallback(() => {
    goToPage(currentPage - 1);
  }, [currentPage, goToPage]);

  const resetPagination = useCallback(() => {
    setCurrentPage(1);
  }, []);

  const paginationInfo: PaginationInfo = {
    currentPage,
    totalPages,
    itemsPerPage,
    totalItems,
  };

  return {
    currentPage,
    totalPages,
    goToPage,
    nextPage,
    previousPage,
    resetPagination,
    paginationInfo,
    hasNextPage: currentPage < totalPages,
    hasPreviousPage: currentPage > 1,
  };
};
