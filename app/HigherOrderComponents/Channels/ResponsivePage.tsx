'use client'

import { useMediaQuery, useTheme } from "@mui/material";
import { ChannelMobile } from "./ChannelsMobile";
import { ChannelDesktop } from "./ChannelsDesktop";

export default function ResponsiveChannelPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return isMobile ? <ChannelMobile /> : <ChannelDesktop/>
};
