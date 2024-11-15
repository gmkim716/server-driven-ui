import MissionListPresenter from "./presenter";

export default async function MissionListContainer() {
  const response = await fetch("http://localhost:3000/json/mission-list.json");
  const data = await response.json();

  return <MissionListPresenter missionList={data.mission_list} />;
}
