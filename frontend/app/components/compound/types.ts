import { ReactNode } from "react";

//== Custon Accordion ==//
export interface CustomAccordionProps {
  children: NonNullable<React.ReactNode>;
}

export interface AccordionSummaryProps {
  children: NonNullable<React.ReactNode>;
  expandIcon?: ReactNode;
}

export interface AccordionDetailsProps {
  layoutLeft?: ReactNode;
  layoutRight?: ReactNode;
  children: ReactNode;
}
export interface CustomAccordionType
  extends React.FunctionComponent<CustomAccordionProps> {
  Summary: React.FunctionComponent<AccordionSummaryProps>;
  Details: React.FunctionComponent<AccordionDetailsProps>;
}
