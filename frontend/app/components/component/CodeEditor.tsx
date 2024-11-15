"use client";

import { useEffect, useRef } from "react";
import { EditorState } from "@codemirror/state";
import { java } from "@codemirror/lang-java";
import { basicSetup, EditorView } from "@codemirror/basic-setup";

export default function CodeEditor() {
  const editorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // editorRef가 null이 아닌지 확인한 후 EditorView 생성
    if (editorRef.current) {
      const startState = EditorState.create({
        doc: `public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}`,
        extensions: [basicSetup, java()],
      });

      const view = new EditorView({
        state: startState,
        parent: editorRef.current,
      });

      // 컴포넌트 언마운트 시 EditorView 인스턴스 제거
      return () => view.destroy();
    }
  }, []);

  return <div ref={editorRef} />;
}
