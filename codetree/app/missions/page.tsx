"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CustomAccordion from "../components/compound/CustomAccordion";
import { ContentType, MissionType } from "./types";
import BadgeUI from "../components/ui/BadgeUI";
import MissionUI from "../components/ui/MissionUI";
import MissionMenuContainer from "../components/container/MissionMenuContainer";

export default function MissionsPage() {
  const router = useRouter();

  const [missions, setMissions] = useState<MissionType[]>([]);

  const handleAction = (content: ContentType) => {
    if (content.actionType === "navigate" && content.link) {
      // 링크로 이동하는 경우
      router.push(content.link);
    }
  };

  async function fetchMissions() {
    try {
      const response = await fetch("/json/tempMissions.json");
      if (!response.ok) {
        throw new Error("미션 데이터를 가져오는 데 실패했습니다.");
      }
      const data = await response.json();
      setMissions(data.missions);
    } catch (error) {
      console.error("미션 데이터를 가져오는 중 오류가 발생했습니다:", error);
    }
  }

  // initialize
  useEffect(() => {
    fetchMissions();
  }, []);

  if (missions.length === 0) return <p>Loading...</p>;

  return (
    <div>
      <MissionMenuContainer />

      {/* Mission List */}
      <ul>
        {missions.map((mission) => (
          <li
            key={mission.id}
            style={{
              border: "1px solid #ddd",
              padding: "16px",
              margin: "8px 0",
            }}
          >
            <CustomAccordion>
              <CustomAccordion.Summary>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h2>{mission.title}</h2>
                  <p>{mission.description}</p>
                  <p>{mission.status}</p>
                </div>
              </CustomAccordion.Summary>
              <CustomAccordion.Details>
                <div>
                  <div style={{ marginLeft: "20px" }}>
                    {mission.chapters.map((chapter) => (
                      <div
                        key={chapter.id}
                        style={{
                          borderTop: "1px solid #ccc",
                          padding: "10px 0",
                        }}
                      >
                        <CustomAccordion>
                          <CustomAccordion.Summary>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <p>{chapter.title}</p>
                              <p>{chapter.organize}</p>
                              <p>{chapter.description}</p>
                            </div>
                          </CustomAccordion.Summary>
                          <div style={{ marginLeft: "20px" }}>
                            {chapter.contents.map((content) => (
                              <div
                                key={content.id}
                                onClick={() => handleAction(content)}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "10px",
                                  cursor: "pointer",
                                }}
                              >
                                <CustomAccordion.Details>
                                  <MissionUI
                                    leftLayout={<div>{content.title}</div>}
                                    rightLayout={
                                      <>
                                        <BadgeUI>{content.ui.xp.label}</BadgeUI>
                                        <div>{content.ui.time.label}</div>
                                      </>
                                    }
                                  />
                                </CustomAccordion.Details>
                              </div>
                            ))}
                          </div>
                        </CustomAccordion>
                      </div>
                    ))}
                  </div>
                </div>
              </CustomAccordion.Details>
            </CustomAccordion>
          </li>
        ))}
      </ul>
    </div>
  );
}
