"use client";

import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  AccordionDetailsProps,
  AccordionSummaryProps,
  CustomAccordionProps,
  CustomAccordionType,
} from "../compound/types";
import {
  StyledAccordion,
  StyledAccordionSummary,
  StyledAccordionDetails,
} from "../compound/styles";

// CustomAccordion 컴포넌트 정의
const CustomAccordion: CustomAccordionType = ({
  children,
}: CustomAccordionProps) => {
  return <StyledAccordion>{children}</StyledAccordion>;
};

// Summary, Details 컴포넌트 정의
const Summary = ({ children }: AccordionSummaryProps) => (
  <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
    {children}
  </StyledAccordionSummary>
);
const Details = ({ children }: AccordionDetailsProps) => (
  <StyledAccordionDetails>{children}</StyledAccordionDetails>
);

// Summary, Details 컴포넌트를 CustomAccordion 컴포넌트에 할당
CustomAccordion.Summary = Summary;
CustomAccordion.Details = Details;

export default CustomAccordion;
