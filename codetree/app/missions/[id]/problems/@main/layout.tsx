"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function ProblemMainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams();
  const { id } = params;

  return (
    <div>
      <nav>
        <Link href={`/missions/${id}/problems/introduction`}>Introduction</Link>
        <Link href={`/missions/${id}/problems/explanation`}>Explanation22</Link>
      </nav>
      {children}
    </div>
  );
}
