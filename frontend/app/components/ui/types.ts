export interface BadgeProps {
  children: React.ReactNode;
}

export interface MissionProps {
  leftLayout: React.ReactNode;
  rightLayout: React.ReactNode;
}

export interface MissionMenuProps {
  id: number;
  level: number;
  engTitle: string;
  korTitle: string;
  state: string;
}

export interface TabLink {
  label: string;
  href: string;
}

export interface TabLinksProps {
  tabs: TabLink[];
  currentTab: number;
  onTabChange: (event: React.SyntheticEvent, newValue: number) => void;
}
