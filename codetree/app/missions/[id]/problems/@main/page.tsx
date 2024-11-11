import ProblemIntroductionContainer from "@/app/components/container-presenter/problem/introduction/container";

export default async function ProblemMainPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const problemId = Number(id);

  return (
    <div>
      <ProblemIntroductionContainer problemId={problemId} />
    </div>
  );
}
