"use client";

import { MissionListType } from "@/app/missions/types";
import { useState } from "react";
import MissionMenu from "../../ui/MissionMenu";
import CustomAccordion from "../../compound/AccordionCompound";

interface MissionMenuProps {
  missionMenuList: MissionListType[] | null;
  initialActiveMission: MissionListType | null;
}

export default function MissionMenuPresenter({
  missionMenuList,
  initialActiveMission,
}: MissionMenuProps) {
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
              <MissionMenu
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
