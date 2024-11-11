export interface MissionListType {
  id: number;
  level: number;
  eng_title: string;
  kor_title: string;
  problems: number;
  state: string;
  tag: string;
}

export interface MissionType {
  id: number;
  title: string;
  description: string;
  status: string;
  chapters: ChapterType[];
}

export interface ChapterType {
  id: number;
  title: string;
  organize: string;
  description: string;
  contents: ContentType[];
}

export interface ContentType {
  id: string;
  title: string;
  ui: {
    progressCircle: {
      percentage: number;
    };
    statusBadge: {
      label: string;
      style: React.CSSProperties;
    };
    xp: {
      label: string;
      style: React.CSSProperties;
    };
    time: {
      label: string;
      style: React.CSSProperties;
    };
  };
  actionType: "navigate" | "open" | "close";
  link?: string;
}
