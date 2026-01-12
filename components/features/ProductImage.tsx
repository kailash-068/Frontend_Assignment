import React from "react";

interface ProductImageProps {
  src: string;
  alt: string;
  containerClassName?: string;
}

export const ProductImage: React.FC<ProductImageProps> = ({
  src,
  alt,
  containerClassName = "",
}) => {
  return (
    <div
      className={`relative aspect-square bg-gray-100 p-6 ${containerClassName}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>
  );
};
