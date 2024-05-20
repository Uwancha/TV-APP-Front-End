import { Box, useMediaQuery, useTheme } from '@mui/material';
import { Favorite, LiveTv, WatchLater } from '@mui/icons-material';

const Navigation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return isMobile ? (
    <Box sx={{display:'flex', justifyContent: 'center', gap:4, alignItems:'center', height:'50px', color:'white', backgroundColor:'#161c2f', boxShadow: '0px -5px 18px 2px black'}}>
      <LiveTv fontSize='large' />
      <Favorite fontSize='large' />
      <WatchLater fontSize='large' />
    </Box>
  ) : (
    <Box  sx={{display:'flex', flexDirection:"column", justifyContent: "center", gap:4, color:'white'}}>
      <LiveTv fontSize='large' />
      <Favorite fontSize='large' />
      <WatchLater fontSize='large' />
    </Box>
  )
  
};

export default Navigation;