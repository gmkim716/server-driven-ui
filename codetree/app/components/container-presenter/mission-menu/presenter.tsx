"use client";

import { MissionListType } from "@/app/missions/types";
import { useState } from "react";
import MissionMenuUI from "../../ui/MissionMenuUI";
import CustomAccordion from "../../compound/CustomAccordion";

interface MissionMenuUIProps {
  missionMenuList: MissionListType[] | null;
  initialActiveMission: MissionListType | null;
}

export default function MissionMenuPresenter({
  missionMenuList,
  initialActiveMission,
}: MissionMenuUIProps) {
  const [activeMission, setActiveMission] = useState<MissionListType | null>(
    initialActiveMission
  );

  const handleMissionSelect = (mission: MissionListType) => {
    setActiveMission(mission);
  };

  return (
    <ul>
      <CustomAccordion>
        <CustomAccordion.Summary>
          <div>{activeMission?.kor_title}</div>
          <div>{activeMission?.eng_title}</div>
        </CustomAccordion.Summary>
        <CustomAccordion.Details>
          {missionMenuList?.map((mission: MissionListType) => (
            <li
              key={mission.id}
              onClick={() => handleMissionSelect(mission)}
              style={{
                fontWeight:
                  mission.id === activeMission?.id ? "bold" : "normal",
              }}
            >
              <MissionMenuUI
                id={mission.id}
                level={mission.level}
                state={mission.state}
                engTitle={mission.eng_title}
                korTitle={mission.kor_title}
              />
            </li>
          ))}
        </CustomAccordion.Details>
      </CustomAccordion>
    </ul>
  );
}
