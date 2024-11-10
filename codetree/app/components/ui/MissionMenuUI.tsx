// import { MissionListType, MissionType } from "@/app/missions/types";

// interface MissionMenuUIProps {
//   missionList: MissionListType[];
//   activeMission: MissionType;
//   onMissionSelect: (mission: MissionType) => void;
// }

// export default function MissionMenuUI({
//   missionList,
//   activeMission,
//   onMissionSelect,
// }: MissionMenuUIProps) {
//   return (
//     <div>
//       {/* missionList 데이터를 렌더링하는 JSX */}
//       <h2>Mission Menu</h2>
//       <ul>
//         {missionList.map((mission) => (
//           <li key={mission.id} onClick={() => onMissionSelect(mission)}>
//             {mission["eng_title"]} - {mission["kor_title"]}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
