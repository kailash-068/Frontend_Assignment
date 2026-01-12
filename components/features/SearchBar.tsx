import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/Input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = "Search...",
}) => {
  return (
    <Input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      icon={<Search className="w-5 h-5" />}
      className="flex-1"
    />
  );
};
