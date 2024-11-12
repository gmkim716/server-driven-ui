interface ProblemLayoutProps {
  main: React.ReactNode;
  sub: React.ReactNode;
}

export default function ProblemLayout({ main, sub }: ProblemLayoutProps) {
  return (
    <>
      <div className="flex">
        {main}
        {sub}
      </div>
    </>
  );
}
