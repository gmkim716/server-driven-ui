import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  styled,
} from "@mui/material";

//== Accordion ==//
export const StyledAccordion = styled(Accordion)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
  "&:before": {
    display: "none",
  },
}));

export const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: theme.palette.common.white,
  },
}));

export const StyledAccordionDetails = styled(AccordionDetails)(({}) => ({
  width: "100%",
}));
