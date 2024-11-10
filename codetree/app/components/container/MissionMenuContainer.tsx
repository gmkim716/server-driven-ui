// import { useEffect, useState } from "react";
// import MissionMenuUI from "../ui/MissionMenuUI";

// export default function MissionMenuContainer() {
//   const [missionList, setMissionList] = useState([]);
//   const [activeMission, setActiveMission] = useState(null);

//   useEffect(() => {
//     async function fetchMissionList() {
//       try {
//         const response = await fetch("/json/mission-list.json");
//         if (!response.ok) {
//           throw new Error("미션 데이터 목록을 가져오는 데 실패했습니다.");
//         }
//         const data = await response.json();
//         console.log(data.missionList);
//         setMissionList(data.missionList);
//       } catch (error) {
//         console.error(
//           "미션 데이터 목록을 가져오는 중 오류가 발생했습니다:",
//           error
//         );
//       }
//     }

//     fetchMissionList();
//   }, []);

//   return (
//     <MissionMenuUI
//       missionList={missionList}
//       activeMission={activeMission}
//       onMissionSelect={setActiveMission}
//     />
//   );
// }
