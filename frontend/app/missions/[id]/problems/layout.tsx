import ProblemHeader from "@/app/components/layout/ProblemHeader";
import ResizableLayout from "@/app/components/layout/ResizableLayout";
import Link from "next/link";
import React from "react";

interface ProblemLayoutProps {
  main: React.ReactNode;
  sub: React.ReactNode;
}

export default async function ProblemLayout({ main, sub }: ProblemLayoutProps) {
  // 서버에서 데이터를 가져옴
  const response = await fetch(
    "http://localhost:3000/json/print-number-from-given-num-to-100-curation.json"
  );
  const data = await response.json();

  return (
    <>
      <ProblemHeader />
      <ResizableLayout main={main} sub={sub} footerData={data} />;
    </>
  );
}
