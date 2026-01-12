import React from "react";
import { Card } from "@/components/ui/Card";

export const ProductSkeleton: React.FC = () => {
  return (
    <Card>
      <div className="aspect-square bg-gray-200 animate-pulse"></div>
      <div className="p-4 space-y-3">
        <div className="h-3 bg-gray-200 rounded w-1/3 animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
        <div className="flex justify-between items-center mt-4">
          <div className="h-6 bg-gray-200 rounded w-20 animate-pulse"></div>
          <div className="h-9 bg-gray-200 rounded w-28 animate-pulse"></div>
        </div>
      </div>
    </Card>
  );
};
