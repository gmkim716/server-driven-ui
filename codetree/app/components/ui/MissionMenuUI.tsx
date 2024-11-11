import { MissionMenuUIProps } from "./types";

export default function MissionMenuUI({
  id,
  level,
  engTitle,
  korTitle,
  state,
}: MissionMenuUIProps) {
  return (
    <div key={id} className="flex">
      <div>{level}</div>
      <div>{engTitle}</div>
      <div>{korTitle}</div>
      <div>{state}</div>
    </div>
  );
}
