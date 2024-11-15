import ProblemIntroductionContainer from "@/app/components/container-presenter/problem/introduction/container";

export default async function ProblemMainPage({
  params,
}: {
  params: Promise<{ id: string }>; // `params`를 `Promise` 타입으로 선언
}) {
  const { id } = await params; // `params`를 비동기로 처리
  const problemId = Number(id);

  return <ProblemIntroductionContainer problemId={problemId} />;
}
