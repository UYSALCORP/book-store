import React, { JSX, ReactNode } from "react";

interface IconButtonProps {
  icon: JSX.Element;
  onClick?: () => void;
}

export default function IconButton({ icon, onClick }: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className="p-3 rounded-md bg-indigo-50 text-indigo-900 hover:bg-indigo-100 transition "
    >
      {icon}
    </button>
  );
}