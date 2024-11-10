"use client";

import { BadgeUIProps } from "./types";

export default function BadgeUI({ children }: BadgeUIProps) {
  return (
    <div className="bg-[#e0e0e0] rounded-full px-2 py-1 text-black">
      {children}
    </div>
  );
}
