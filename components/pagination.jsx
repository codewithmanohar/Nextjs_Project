"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationDemo({ currentPage, totalPages, onPageChange }) {
  return (
    <Pagination>
      <PaginationContent>

        <PaginationItem>
          <PaginationPrevious
            className={currentPage === 1 ? "opacity-50 pointer-events-none" : ""}
            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
          />
        </PaginationItem>

        {Array.from({ length: totalPages }).map((_, i) => (
          <PaginationItem key={i}>
            <PaginationLink
              isActive={currentPage === i + 1}
              onClick={() => onPageChange(i + 1)}
            >
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            className={currentPage === totalPages ? "opacity-50 pointer-events-none" : ""}
            onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
          />
        </PaginationItem>

      </PaginationContent>
    </Pagination>
  );
}
