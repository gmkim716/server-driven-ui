"use client";

import { BadgeProps } from "./types";

export default function Badge({ children }: BadgeProps) {
  return (
    <div className="bg-[#e0e0e0] rounded-full px-2 py-1 text-black">
      {children}
    </div>
  );
}
