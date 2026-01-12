import React from "react";
import { ArrowUpDown } from "lucide-react";
import { Select } from "@/components/ui/Select";
import { SortOption } from "@/types";
import { SORT_OPTIONS, ARIA_LABELS } from "@/constants";

interface SortDropdownProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
  className?: string;
}

export const SortDropdown: React.FC<SortDropdownProps> = ({
  value,
  onChange,
  className,
}) => {
  const options = SORT_OPTIONS.map((opt) => ({
    value: opt.value,
    label: opt.label,
  }));

  return (
    <div
      className={className}
      role="group"
      aria-label={ARIA_LABELS.SORT_PRODUCTS}
    >
      <Select
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        options={options}
        icon={<ArrowUpDown className="w-5 h-5" />}
      />
    </div>
  );
};
