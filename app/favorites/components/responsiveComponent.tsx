'use client'

import { useMediaQuery, useTheme } from "@mui/material";
import { FavoritesDesktop } from "./desktopComponent";
import FavoritesMobile from "./mobileComponent";

export default function ResponsiveFavoritesPage({ data }: { data:any }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return isMobile ? < FavoritesMobile data={data} /> : <FavoritesDesktop data={data} />
};
