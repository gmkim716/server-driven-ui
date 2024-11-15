"use client";

import React, { useEffect, useState } from "react";

interface ProblemMainLayoutFooterProps {
  id: number;
}

export default function ProblemMainLayoutFooter({
  id,
}: ProblemMainLayoutFooterProps) {
  const [data, setData] = useState<{
    mission_name: string;
    concept_name: string;
    study_unit_name: string;
  } | null>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `/json/print-number-from-given-num-to-100-curation.json`
      );
      const jsonData = await response.json();
      setData(jsonData);
    }

    fetchData();
  }, [id]);

  return (
    <footer className="w-full bg-gray-100 border-t p-4 flex justify-between items-center">
      <button>햄버거 메뉴</button>
      <div>
        {data && (
          <>
            {data.mission_name} / {data.concept_name} / {data.study_unit_name}
          </>
        )}
      </div>
    </footer>
  );
}
