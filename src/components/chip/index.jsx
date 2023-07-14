import React from "react";

export default function Chip({ children }) {
  return (
    <div className="py-[5px] px-[14px] bg-gray-200 rounded-[20px] text-gray-500 font-normal text-sm">
      {children}
    </div>
  );
}
