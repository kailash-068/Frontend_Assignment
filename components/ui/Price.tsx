import React from "react";

interface PriceProps {
  amount: number;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export const Price: React.FC<PriceProps> = ({
  amount,
  size = "md",
  className = "",
}) => {
  const sizeStyles = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
    xl: "text-4xl",
  };

  return (
    <span
      className={`${sizeStyles[size]} font-bold text-gray-900 ${className}`}
    >
      ${amount.toFixed(2)}
    </span>
  );
};
