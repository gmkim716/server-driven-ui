//== container ==//
export interface ContentType {
  type: "code" | "h1" | "h2" | "p" | "hr";
  content: string;
  language?: string;
}

export interface ProblemIntroductionPresenterProps {
  data?: ProblemIntroduction; // 임시 적용
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
  problemId?: number; // 임시 적용
}

//== introduction ==//
export interface ProblemIntroduction {
  alias: string;
  id: number;
  type: string;
  discussions_count: number;
  mc_answers_count: number;
  mc_questions: any[]; // 구체적인 질문 데이터 타입이 없는 경우 any[]
  mc_questions_en: any[]; // 구체적인 질문 데이터 타입이 없는 경우 any[]
  name: string;
  description: string;
  description_en: string;
  test_cases: TestCase[];
  time_limit: number;
  memory_limit: number;
  submission_count: number;
  correct_count: number;
  solved_minute: number;
  experience_point: number;
  tier: number;
  tags: string[];
  is_training_field: boolean;
}

export interface TestCase {
  order: number;
  stdin: string;
  stdout: string;
}

//== explanation ==//
export interface ProblemExplanationProps {
  data: ProblemExplanation;
}

export interface ProblemExplanation {
  alias: string;
  id: number;
  type: string; // 예: "Code block"
  discussions_count: number;
  mc_answers_count: number;
  mc_questions: string[]; // 예: 빈 배열인 경우도 있음
  mc_questions_en: string[]; // 예: 빈 배열인 경우도 있음
  name: string;
  description: string;
  description_en: string;
  test_cases: TestCase[]; // 테스트 케이스 배열
  time_limit: number; // 제한 시간 (밀리초 단위)
  memory_limit: number; // 메모리 제한 (MB 단위)
  submission_count: number;
  correct_count: number;
  solved_minute: number; // 푼 시간 (분 단위)
  experience_point: number; // 경험치
  tier: number; // 문제 난이도
  tags: string[]; // 태그 배열 (예: ["Iteration"])
  is_training_field: boolean; // 훈련용 문제 여부
}

export interface CodeRendererProps {
  inline?: boolean;
  children?: React.ReactNode;
  className?: string;
}
