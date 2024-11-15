"use client";

import { useState } from "react";

export function useCopyToClipboard() {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async (test: string) => {
    try {
      await navigator.clipboard.writeText(test); // navigator.clipboard.writeText(): 클립보드에 텍스트를 쓰는 메서드다
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // 사용자가 복사된 메시지를 확인할 시간을 주기 위해 2초 후에 복사됨 메시지를 없앤다
    } catch (error) {
      console.error("복사 실패", error);
      setIsCopied(false);
    }
  };

  return { isCopied, copy };
}
