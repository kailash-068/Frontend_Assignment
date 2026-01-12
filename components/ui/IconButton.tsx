import React from "react";

interface IconButtonProps {
  icon: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "default" | "danger" | "primary";
  ariaLabel: string;
  active?: boolean;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  variant = "default",
  ariaLabel,
  active = false,
}) => {
  const baseStyles =
    "p-2 rounded-full shadow-md hover:scale-110 transition-all duration-200";

  const variantStyles = {
    default: "bg-white text-gray-400 hover:text-gray-600",
    danger: active
      ? "bg-red-50 text-red-500"
      : "bg-white text-gray-400 hover:text-red-500",
    primary: "bg-blue-600 text-white hover:bg-blue-700",
  };

  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      {icon}
    </button>
  );
};
