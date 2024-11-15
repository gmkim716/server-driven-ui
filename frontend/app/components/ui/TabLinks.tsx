import { Tabs, Tab as MuiTab } from "@mui/material";
import Link from "next/link";
import { TabLinksProps } from "./types";

const TabsStyles = () => ({
  "& .MuiTabs-indicator": {
    display: "none",
  },
  backgroundColor: "#F4F7F9", // codeTree 색상 직접 추출
  width: "100%",
});

const TabStyles = (isSelected: boolean) => ({
  fontSize: "1em",
  fontWeight: isSelected ? "bold" : "normal",
  backgroundColor: isSelected ? "#fff" : "#F4F7F9",
  color: isSelected ? "#1E90FF" : "#666",
  borderTop: isSelected ? "1px solid #ebebeb" : "",
  borderLeft: isSelected ? "1px solid #ebebeb" : "",
  borderRight: isSelected ? "1px solid #ebebeb" : "",
  borderBottom: "none",
  borderRadius: "12px 12px 0 0",
  "&:hover": {
    fontWeight: "bold",
  },
});

export default function TabLinks({
  tabs,
  currentTab,
  onTabChange,
}: TabLinksProps) {
  return (
    <Tabs
      className="flex"
      value={currentTab}
      onChange={onTabChange}
      aria-label="tab navigation"
      variant="fullWidth" // MUI에서 탭의 스타일과 너비를 조정하는 속성  ex) fullWidth, scrollable
      sx={TabsStyles}
    >
      {tabs.map((tab, index) => (
        <MuiTab
          key={index}
          component={Link}
          href={tab.href}
          label={tab.label}
          value={index}
          sx={TabStyles(currentTab === index)}
        />
      ))}
    </Tabs>
  );
}
