"use client";

import Markdown from "react-markdown";
import { CodeRendererProps, ProblemExplanationProps } from "../types";
import remarkGfm from "remark-gfm";
import CodeBlock from "@/app/components/ui/CodBlock";

export default function ProblemExplanationPresenter({
  data,
}: ProblemExplanationProps) {
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
    <>
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          code: CodeRenderer,
        }}
      >
        {data.description}
      </Markdown>
    </>
  );
}
