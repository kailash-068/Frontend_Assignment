import React from "react";
import { Heart } from "lucide-react";
import { IconButton } from "@/components/ui/IconButton";

interface FavoriteButtonProps {
  isFavorite: boolean;
  onToggle: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  isFavorite,
  onToggle,
}) => {
  return (
    <IconButton
      icon={<Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />}
      onClick={onToggle}
      variant="danger"
      ariaLabel={isFavorite ? "Remove from favorites" : "Add to favorites"}
      active={isFavorite}
    />
  );
};
