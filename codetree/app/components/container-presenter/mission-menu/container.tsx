import MissionMenuPresenter from "./presenter";

export default async function MissionMenuContainer() {
  const response = await fetch(
    "http://localhost:3000/json/mission-menu-list.json"
  );
  const data = await response.json();

  return (
    <MissionMenuPresenter
      missionMenuList={data.mission_menu_list}
      initialActiveMission={data[0]}
    />
  );
}
