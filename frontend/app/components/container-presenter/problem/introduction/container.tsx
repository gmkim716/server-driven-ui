import ProblemIntroductionPresenter from "./presenter";
import { ProblemIntroductionContainerProps } from "../types";

export default async function ProblemIntroductionContainer({}: // problemId,
ProblemIntroductionContainerProps) {
  const response = await fetch(
    "http://localhost:3000/json/print-number-from-given-num-to-100-introduction.json"
  );

  const data = await response.json();

  return <ProblemIntroductionPresenter data={data} />;
}
