"use client";

import { MissionProps } from "./types";
import { LeftLayout, MissionContainer, RightLayout } from "./styles";

export default function Mission({ leftLayout, rightLayout }: MissionProps) {
  return (
    <MissionContainer>
      <LeftLayout>{leftLayout}</LeftLayout>
      <RightLayout>{rightLayout}</RightLayout>
    </MissionContainer>
  );
}
