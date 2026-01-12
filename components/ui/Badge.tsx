import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "success" | "warning";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
}) => {
  const variantStyles = {
    default: "bg-gray-100 text-gray-700",
    primary: "bg-blue-100 text-blue-700",
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
  };

  return (
    <span
      className={`inline-block px-2.5 py-1 text-xs font-medium uppercase tracking-wide rounded-full ${variantStyles[variant]}`}
    >
      {children}
    </span>
  );
};
