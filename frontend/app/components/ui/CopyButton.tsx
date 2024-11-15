import { useCopyToClipboard } from "../hook/useCopyToClipboard";

/**
 * CopyButton
 *
 * 복사하기 버튼, 클릭 시 텍스트를 클립보드에 복사합니다
 *
 * @param text - string 복사할 텍스트
 *
 * @example - CodeBlock 컴포넌트의 내용을 복사하는 버튼
 */
export default function CopyButton({ text }: { text: string }) {
  const { isCopied, copy } = useCopyToClipboard();

  return (
    <button onClick={() => copy(text)} className="copy-button">
      {isCopied ? "복사됨" : "복사"}
    </button>
  );
}
