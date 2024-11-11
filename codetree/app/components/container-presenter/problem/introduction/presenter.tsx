"use client";

import TabUI from "@/app/components/ui/TabUI";
import { ProblemIntroductionPresenterProps } from "./types";

export default function ProblemIntroductionPresenter({
  problem,
}: ProblemIntroductionPresenterProps) {
  return (
    <>
      {/* <TabUI /> */}
      <h1>{problem.problem.kor_title}</h1>
      <div>
        {problem.problem.contents.map((content: any, index: number) => {
          switch (content.type) {
            case "p":
              return <p key={index}>{content.content}</p>;
            case "h2":
              return <h2 key={index}>{content.content}</h2>;
            case "code":
              return (
                <pre key={index}>
                  <code>{content.content}</code>
                </pre>
              );
            default:
              return null;
          }
        })}
      </div>
    </>
  );
}
