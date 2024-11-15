"use client";

import TabLinks from "@/app/components/ui/TabLinks";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function ProblemMainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams();
  const id = typeof params.id === "string" ? params.id : "";

  const [currentTab, setCurrentTab] = useState(0);

  const tabs = [
    { label: "기본개념", href: `/missions/${id}/problems/introduction` },
    { label: "문제", href: `/missions/${id}/problems/description` },
    { label: "해설", href: `/missions/${id}/problems/explanation` },
    { label: "제출기록", href: `/missions/${id}/problems/submissions` },
    { label: "토론", href: `/missions/${id}/problems/discussions` },
  ];

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  return (
    <div>
      <TabLinks
        tabs={tabs}
        currentTab={currentTab}
        onTabChange={handleTabChange}
      />
      {children}
    </div>
  );
}
