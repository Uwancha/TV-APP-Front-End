import { Box, useMediaQuery, useTheme } from '@mui/material';
import { Favorite, LiveTv, WatchLater } from '@mui/icons-material';
import Link from 'next/link';

const Navigation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return isMobile ? (
    <Box sx={{display:'flex', justifyContent: 'center', gap:4, alignItems:'center', height:'50px', color:'white', backgroundColor:'#161c2f', boxShadow: '0px -5px 18px 2px black'}}>
      <Link href={'/channel'} style={{color:'white', textDecoration:'none'}}>
        <LiveTv fontSize='large' sx={{color:'white'}} />
      </Link>
      <Link href={'/favorites'} style={{color:'white', textDecoration:'none'}}>
        <Favorite fontSize='large' />
      </Link>
      <Link href={'/watchlater'} style={{color:'white', textDecoration:'none'}}>
        <WatchLater fontSize='large' />
      </Link>
    </Box>
  ) : (
    <Box  sx={{display:'flex', flexDirection:"column", justifyContent: "center", gap:4, color:'white'}}>
       <Link href={'/channel'} style={{color:'white', textDecoration:'none'}}>
        <LiveTv fontSize='large' sx={{color:'white'}} />
      </Link>
      <Link href={'/favorites'} style={{color:'white', textDecoration:'none'}}>
        <Favorite fontSize='large' />
      </Link>
      <Link href={'/watchlater'} style={{color:'white', textDecoration:'none'}}>
        <WatchLater fontSize='large' />
      </Link>
    </Box>
  )
  
};

export default Navigation;