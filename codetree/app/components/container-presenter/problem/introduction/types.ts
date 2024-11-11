//== container ==//
export interface ContentType {
  type: "code" | "h1" | "h2" | "p" | "hr";
  content: string;
  language?: string;
}

export interface ProblemIntroductionPresenterProps {
  problem: ProblemType;
}

//== presenter ==//
export interface ProblemType {
  idx: number;
  problem: {
    kor_title: string;
    eng_title: string;
    contents: ContentType[];
  };
}

export interface ProblemIntroductionContainerProps {
  problemId: number;
}
