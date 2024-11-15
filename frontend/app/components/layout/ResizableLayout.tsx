"use client";

import React, { useState } from "react";
import WidthResizableDivider from "@/app/components/layout/WidthResizableDivider";
import { ResizableLayoutProps } from "./type";
import ProblemMainLayoutFooter from "./ProblemMainLayoutFooter";

export default function ResizableLayout({
  main,
  sub,
  footerData,
}: ResizableLayoutProps) {
  const [mainWidth, setMainWidth] = useState((1 / 3) * 100);

  const handleResize = (widthPercentage: number) => {
    setMainWidth(widthPercentage);
  };

  return (
    <div className="flex w-full h-full">
      <div
        style={{ width: `${mainWidth}%` }}
        className=" flex flex-col h-full justify-between"
      >
        <div>{main}</div>
        <ProblemMainLayoutFooter data={footerData} />
      </div>
      <WidthResizableDivider onResize={handleResize} />
      <div style={{ width: `${100 - mainWidth}%` }} className="p-4">
        {sub}
      </div>
    </div>
  );
}
