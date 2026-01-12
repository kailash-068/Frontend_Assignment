import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hoverable = false,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-lg shadow-md overflow-hidden ${
        hoverable
          ? "hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};
