import { MissionMenuProps } from "./types";

export default function MissionMenu({
  id,
  level,
  engTitle,
  korTitle,
  state,
}: MissionMenuProps) {
  return (
    <div key={id} className="flex">
      <div>{level}</div>
      <div>{engTitle}</div>
      <div>{korTitle}</div>
      <div>{state}</div>
    </div>
  );
}
