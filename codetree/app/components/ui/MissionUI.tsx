"use client";

import styled from "@emotion/styled";
import { MissionUIProps } from "./types";

const MissionUiContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const LeftLayout = styled.div`
  display: flex;
  align-items: center;
`;

const RightLayout = styled.div`
  display: flex;
  align-items: center;
`;

export default function MissionUI({ leftLayout, rightLayout }: MissionUIProps) {
  return (
    <MissionUiContainer>
      <LeftLayout>{leftLayout}</LeftLayout>
      <RightLayout>{rightLayout}</RightLayout>
    </MissionUiContainer>
  );
}
