"use client";

import React from "react";
import { WidthResizableDividerProps } from "./type";

export default function WidthResizableDivider({
  onResize,
}: WidthResizableDividerProps) {
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    const widthPercentage = (e.clientX / window.innerWidth) * 100;
    onResize(widthPercentage);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      className="w-2 h-screen cursor-move bg-gray-200 flex items-center justify-center hover:bg-gray-300"
    >
      <span>
        .<br />.<br />.<br />.
      </span>
    </div>
  );
}
