'use client';

import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import ProgramTable from '../components/ProgramTable';
import { MobileSideBar } from '../components/drawer';

export default function Programs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{backgroundColor:'whitesmoke'}}>
      <Header currentpage={'Program'} />
      {isMobile && 
        <MobileSideBar />
      } 
      <Grid container>
        {!isMobile && 
          <Grid item lg={2} sx={{backgroundColor:'white'}}>
            <Navigation/>
          </Grid>
        } 
    
        <Grid item xs={12} lg={10} sx={{ padding:4, boxShadow:'-1px -1px 8px 1px #d5d6e2'}}>
          <ProgramTable/>
        </Grid>
      </Grid>
    </Box>
  );
};
