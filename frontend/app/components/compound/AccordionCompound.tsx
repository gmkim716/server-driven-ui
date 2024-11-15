"use client";

import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  AccordionDetailsProps,
  AccordionSummaryProps,
  CustomAccordionProps,
  CustomAccordionType,
} from "./types";
import {
  StyledAccordion,
  StyledAccordionSummary,
  StyledAccordionDetails,
} from "./styles";

const CustomAccordion: CustomAccordionType = ({
  children,
}: CustomAccordionProps) => {
  return <StyledAccordion>{children}</StyledAccordion>;
};

const Summary = ({ children }: AccordionSummaryProps) => (
  <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
    {children}
  </StyledAccordionSummary>
);
const Details = ({ children }: AccordionDetailsProps) => (
  <StyledAccordionDetails>{children}</StyledAccordionDetails>
);

CustomAccordion.Summary = Summary;
CustomAccordion.Details = Details;

export default CustomAccordion;
