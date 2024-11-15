export interface WidthResizableDividerProps {
  onResize: (widthPercentage: number) => void;
}

export interface ResizableLayoutProps {
  main: React.ReactNode;
  sub: React.ReactNode;
  footerData: {
    mission_name: string;
    concept_name: string;
    study_unit_name: string;
  };
}
