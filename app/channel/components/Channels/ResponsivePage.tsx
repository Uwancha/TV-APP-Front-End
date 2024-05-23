'use client'

import { useMediaQuery, useTheme } from "@mui/material";
import { ChannelMobile } from "./ChannelsMobile";
import { ChannelDesktop } from "./ChannelsDesktop";

export default function ResponsiveChannelPage({data}:any) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return isMobile ? <ChannelMobile data={data.channels} /> : <ChannelDesktop data={data.channels}/>
};
