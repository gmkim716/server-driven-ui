"use client";

import { ChapterType } from "@/app/missions/types";
import CustomAccordion from "../../compound/AccordionCompound";

interface MissionType {
  id: number;
  title: string;
  description: string;
  status: string;
  chapters: ChapterType[];
}

interface MissionListPresenterProps {
  missionList: MissionType[];
}

export default function MissionListPresenter({
  missionList,
}: MissionListPresenterProps) {
  return (
    <ul>
      {missionList.map((mission) => (
        <li key={mission.id}>
          <CustomAccordion>
            <CustomAccordion.Summary>
              <p>{mission.id}</p>
              <h2>{mission.title}</h2>
              <p>{mission.description}</p>
              <p>Status: {mission.status}</p>
            </CustomAccordion.Summary>
            <CustomAccordion.Details>
              <ul>
                {mission.chapters.map((chapter) => (
                  <li key={chapter.id}>{chapter.title}</li>
                ))}
              </ul>
            </CustomAccordion.Details>
          </CustomAccordion>
        </li>
      ))}
    </ul>
  );
}
