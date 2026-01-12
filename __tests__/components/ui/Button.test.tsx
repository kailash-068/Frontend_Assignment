import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "@/components/ui/Button";

describe("Button Component", () => {
  it("renders button with text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders with primary variant by default", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-blue-600");
  });

  it("renders with secondary variant", () => {
    render(<Button variant="secondary">Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-gray-100");
  });

  it("is disabled when disabled prop is true", () => {
    render(<Button disabled>Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("renders with icon", () => {
    const TestIcon = () => <span data-testid="test-icon">★</span>;
    render(<Button icon={<TestIcon />}>Click me</Button>);
    expect(screen.getByTestId("test-icon")).toBeInTheDocument();
  });
});
