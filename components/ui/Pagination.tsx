import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./Button";
import { PaginationInfo } from "@/types";
import { ARIA_LABELS } from "@/constants";

interface PaginationProps {
  paginationInfo: PaginationInfo;
  onPageChange: (page: number) => void;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export const Pagination: React.FC<PaginationProps> = ({
  paginationInfo,
  onPageChange,
  hasNextPage,
  hasPreviousPage,
}) => {
  const { currentPage, totalPages, itemsPerPage, totalItems } = paginationInfo;

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const getPageNumbers = (): (number | string)[] => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    pages.push(1);

    if (currentPage > 3) {
      pages.push("...");
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav
      className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8"
      aria-label="Pagination navigation"
      role="navigation"
    >
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Showing <span className="font-semibold">{startItem}</span> to{" "}
        <span className="font-semibold">{endItem}</span> of{" "}
        <span className="font-semibold">{totalItems}</span> results
      </p>

      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={!hasPreviousPage}
          icon={<ChevronLeft className="w-4 h-4" />}
          aria-label={ARIA_LABELS.PREVIOUS_PAGE}
        >
          Previous
        </Button>

        <div className="flex items-center gap-1" role="list">
          {getPageNumbers().map((page, index) =>
            page === "..." ? (
              <span
                key={`ellipsis-${index}`}
                className="px-3 py-2 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
              >
                ...
              </span>
            ) : (
              <button
                key={page}
                onClick={() => onPageChange(page as number)}
                className={`px-3 py-2 text-sm rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  currentPage === page
                    ? "bg-blue-600 text-white font-semibold"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
                aria-label={`Go to page ${page}`}
                aria-current={currentPage === page ? "page" : undefined}
                role="listitem"
              >
                {page}
              </button>
            )
          )}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={!hasNextPage}
          icon={<ChevronRight className="w-4 h-4" />}
          aria-label={ARIA_LABELS.NEXT_PAGE}
        >
          Next
        </Button>
      </div>
    </nav>
  );
};
