import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProductCard } from "../../../components/features/ProductCard";

const mockProduct = {
  id: 1,
  title: "Test Product",
  price: 29.99,
  description: "Test description",
  category: "electronics",
  image: "https://example.com/image.jpg",
  rating: {
    rate: 4.5,
    count: 100,
  },
};

describe("ProductCard Component", () => {
  const mockToggleFavorite = jest.fn();
  const mockViewDetails = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders product information", () => {
    render(
      <ProductCard
        product={mockProduct}
        isFavorite={false}
        onToggleFavorite={mockToggleFavorite}
        onViewDetails={mockViewDetails}
      />
    );

    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("$29.99")).toBeInTheDocument();
    expect(screen.getByText("electronics")).toBeInTheDocument();
  });

  it("calls onViewDetails when button is clicked", () => {
    render(
      <ProductCard
        product={mockProduct}
        isFavorite={false}
        onToggleFavorite={mockToggleFavorite}
        onViewDetails={mockViewDetails}
      />
    );

    const viewButton = screen.getByText("View Details");
    fireEvent.click(viewButton);

    expect(mockViewDetails).toHaveBeenCalledWith(mockProduct);
    expect(mockViewDetails).toHaveBeenCalledTimes(1);
  });

  it("calls onToggleFavorite when favorite button is clicked", () => {
    render(
      <ProductCard
        product={mockProduct}
        isFavorite={false}
        onToggleFavorite={mockToggleFavorite}
        onViewDetails={mockViewDetails}
      />
    );

    const favoriteButton = screen.getByLabelText(/add to favorites/i);
    fireEvent.click(favoriteButton);

    expect(mockToggleFavorite).toHaveBeenCalledWith(1);
    expect(mockToggleFavorite).toHaveBeenCalledTimes(1);
  });
});
