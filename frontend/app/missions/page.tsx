import MissionListContainer from "../components/container-presenter/mission-list/container";
import MissionMenuContainer from "../components/container-presenter/mission-menu/container";

export default function MissionsPage() {
  return (
    <div>
      <MissionMenuContainer />
      <MissionListContainer />
    </div>
  );
}
