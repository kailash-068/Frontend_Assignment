import React from "react";

interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  message: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  message,
}) => {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-16 px-4">
      <div className="text-gray-300 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-700 mb-2">{title}</h3>
      <p className="text-gray-500 text-center">{message}</p>
    </div>
  );
};
