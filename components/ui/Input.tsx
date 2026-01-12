import React from "react";

interface InputProps {
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  icon?: React.ReactNode;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  type = "text",
  value,
  onChange,
  placeholder,
  icon,
  className = "",
}) => {
  return (
    <div className={`relative ${className}`}>
      {icon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </div>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full ${
          icon ? "pl-10" : "pl-4"
        } pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
      />
    </div>
  );
};
