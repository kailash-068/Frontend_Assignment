import React from "react";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ErrorStateProps {
  message: string;
  onRetry: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({ message, onRetry }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Oops! Something went wrong
        </h2>
        <p className="text-gray-600 mb-6">{message}</p>
        <Button variant="primary" size="lg" onClick={onRetry}>
          Try Again
        </Button>
      </div>
    </div>
  );
};
