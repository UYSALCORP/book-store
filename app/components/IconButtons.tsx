import React, { ReactNode } from "react";

interface IconButtonProps {
  icon: ReactNode;
  onClick?: () => void;
}

export default function IconButton({ icon, onClick }: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className="p-3 rounded-md bg-indigo-50 text-indigo-900 hover:bg-indigo-100 transition"
    >
      {icon}
    </button>
  );
}