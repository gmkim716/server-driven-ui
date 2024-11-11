export interface BadgeUIProps {
  children: React.ReactNode;
}

export interface MissionUIProps {
  leftLayout: React.ReactNode;
  rightLayout: React.ReactNode;
}

export interface MissionMenuUIProps {
  id: number;
  level: number;
  engTitle: string;
  korTitle: string;
  state: string;
}
