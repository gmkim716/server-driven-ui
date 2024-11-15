import ProblemSubLayoutHeader from "@/app/components/layout/ProblemSubLayoutHeader";

export default function ProblemSubPage({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProblemSubLayoutHeader>{children}</ProblemSubLayoutHeader>
    </>
  );
}
