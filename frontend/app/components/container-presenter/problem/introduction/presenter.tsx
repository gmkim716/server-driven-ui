"use client";

import Markdown from "react-markdown";
import { CodeRendererProps, ProblemIntroductionPresenterProps } from "../types";
import remarkGfm from "remark-gfm";
import CodeBlock from "@/app/components/ui/CodBlock";

export default function ProblemIntroductionPresenter({
  data,
}: ProblemIntroductionPresenterProps) {
  const CodeRenderer = ({ inline, children, className }: CodeRendererProps) => {
    // `children`을 문자열로 안전하게 변환
    const codeContent = Array.isArray(children)
      ? children.join("")
      : String(children);

    return (
      // !!inline: inline이 true일 때만 true 반환
      <CodeBlock inline={!!inline} className={className}>
        {codeContent}
      </CodeBlock>
    );
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          code: CodeRenderer,
        }}
      >
        {data.description}
      </Markdown>
      <hr />
    </div>
  );
}
