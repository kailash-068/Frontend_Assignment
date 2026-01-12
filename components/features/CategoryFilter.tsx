import React from "react";
import { Filter } from "lucide-react";
import { Select } from "@/components/ui/Select";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  const options = categories.map((cat) => ({
    value: cat,
    label: cat === "all" ? "All Categories" : cat,
  }));

  return (
    <Select
      value={selectedCategory}
      onChange={(e) => onCategoryChange(e.target.value)}
      options={options}
      icon={<Filter className="w-5 h-5" />}
    />
  );
};
