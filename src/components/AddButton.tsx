import React from 'react';
import { Plus } from 'lucide-react';

interface AddButtonProps {
  onClick: () => void;
  label: string;
}

export function AddButton({ onClick, label }: AddButtonProps) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
    >
      <Plus className="w-4 h-4 mr-2" />
      <span className="whitespace-nowrap">{label}</span>
    </button>
  );
}