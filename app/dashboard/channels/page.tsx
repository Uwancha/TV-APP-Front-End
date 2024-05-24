'use client';

import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import ChannelTable from '../components/ChannelTable';
import { MobileSideBar } from '../components/drawer';

export default function Channels() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{backgroundColor:'whitesmoke'}}>
      <Header currentpage={'Channel'} />
      {isMobile && 
        <MobileSideBar />
      } 
      <Grid container>
        {!isMobile && 
          <Grid item lg={2} sx={{backgroundColor:'white'}}>
            <Navigation/>
          </Grid>
        } 
    
        <Grid item lg={10} sx={{ padding:4, backgroundColor:'whitesmoke', boxShadow:'-1px -1px 8px 1px #d5d6e2'}}>
          <ChannelTable/>
        </Grid>
      </Grid>
    </Box>
  );
};
