import ProblemIntroductionPresenter from "./presenter";
import { ProblemIntroductionContainerProps, ProblemType } from "./types";

export default async function ProblemIntroductionContainer({
  problemId,
}: ProblemIntroductionContainerProps) {
  const response = await fetch("http://localhost:3000/json/temp-problem.json");
  const data = await response.json();

  const problem = data.problems.find(
    (p: ProblemType) => p.idx === Number(problemId)
  );

  return <>{/* <ProblemIntroductionPresenter problem={problem} />; */}</>;
}
