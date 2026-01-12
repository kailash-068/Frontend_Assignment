import React from "react";
import { Star } from "lucide-react";

interface RatingProps {
  rate: number;
  count: number;
  size?: "sm" | "md" | "lg";
}

export const Rating: React.FC<RatingProps> = ({ rate, count, size = "md" }) => {
  const sizeStyles = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  const iconSize = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  return (
    <div
      className={`flex items-center gap-1 ${sizeStyles[size]} text-gray-600`}
    >
      <Star className={`${iconSize[size]} fill-yellow-400 text-yellow-400`} />
      <span className="font-medium">{rate}</span>
      <span className="text-gray-400">({count})</span>
    </div>
  );
};
