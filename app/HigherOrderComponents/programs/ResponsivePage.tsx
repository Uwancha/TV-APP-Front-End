'use client'

import { useMediaQuery, useTheme } from "@mui/material";
import ProgramMobile from "./ProgramMobile";
import ProgramDesktop from "./ProgramDesktop";

export default function ResponsiveProgramsPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return isMobile ? <ProgramMobile /> : <ProgramDesktop/>
};
