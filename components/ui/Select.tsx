import React from "react";

interface SelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Array<{ value: string; label: string }>;
  icon?: React.ReactNode;
}

export const Select: React.FC<SelectProps> = ({
  value,
  onChange,
  options,
  icon,
}) => {
  return (
    <div className="flex items-center gap-2">
      {icon && <div className="text-gray-400">{icon}</div>}
      <select
        value={value}
        onChange={onChange}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent capitalize bg-white"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="capitalize">
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};
