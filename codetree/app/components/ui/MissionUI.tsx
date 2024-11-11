"use client";

import { MissionUIProps } from "./types";
import { LeftLayout, MissionUiContainer, RightLayout } from "./styles";

export default function MissionUI({ leftLayout, rightLayout }: MissionUIProps) {
  return (
    <MissionUiContainer>
      <LeftLayout>{leftLayout}</LeftLayout>
      <RightLayout>{rightLayout}</RightLayout>
    </MissionUiContainer>
  );
}
