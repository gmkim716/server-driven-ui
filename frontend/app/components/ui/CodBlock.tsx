import CopyButton from "./CopyButton";

interface CodeBlockProps {
  inline: boolean;
  className?: string;
  children: React.ReactNode;
}

/**
 *  코드 블록 컴포넌트
 *
 * @param inline: 코드가 인라인(한 줄)인지 블록(여러 줄)인지 여부
 * @param children: 코드 내용
 */
export default function CodeBlock({ inline, children }: CodeBlockProps) {
  const codeContent = String(children).trim();

  if (inline) {
    return (
      <code className="bg-gray-100 dark:bg-gray-800 p-1 rounded">
        {codeContent}
      </code>
    );
  }

  return (
    <div className="relative">
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
        <code className="text-sm">{codeContent}</code>
      </pre>
      <CopyButton text={codeContent} />
    </div>
  );
}
