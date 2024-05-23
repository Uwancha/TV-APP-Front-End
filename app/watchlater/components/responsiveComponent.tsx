'use client'

import { useMediaQuery, useTheme } from "@mui/material";
import WatchLaterMobile from "./mobileComponent";
import { WatchLaterDesktop } from "./desktopComponent";

export default function ResponsiveWatchLaterPage({ data }: {data:any}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return isMobile ? < WatchLaterMobile data={data} /> : <WatchLaterDesktop data={data} />
};
