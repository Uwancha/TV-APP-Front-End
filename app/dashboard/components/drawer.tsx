'use client';

import { useState } from 'react';
import {  List, ListItem, ListItemText, Box, Button, Drawer, IconButton } from '@mui/material';
import { ChevronRight, Dashboard, LinkRounded } from '@mui/icons-material';
import Link from 'next/link';

export const MobileSideBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };
  
  return (
    <>
      <IconButton onClick={toggleDrawer(true)} sx={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }}>
        <ChevronRight />
      </IconButton>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }}>
          <List sx={{display:'flex', flexDirection:'column', gap:4, paddingLeft:6, marginTop: 12}}>
            <Link href={'/dashboard'} style={{display:'flex', alignItems:'center', gap:4, color:'#161c2f', textDecoration:'none'}}>
              <Dashboard fontSize='large'/>
              <ListItem >
                <ListItemText primary="Dashboard" />
              </ListItem>
            </Link>
            <Link href={'/dashboard/programs'} style={{display:'flex', alignItems:'center', gap:4, color:'#161c2f', textDecoration:'none'}}>
              <LinkRounded fontSize='large'/>
              <ListItem >
                <ListItemText primary="Program" />
              </ListItem>
            </Link >
            <Link href={'/dashboard/channels'} style={{display:'flex', alignItems:'center', gap:4, color:'#161c2f', textDecoration:'none'}}>
              <LinkRounded fontSize='large'/>
              <ListItem >
                <ListItemText primary="Channel" />
              </ListItem>
            </Link>
          </List>
        </Box>
      </Drawer>
    </>  
  );
};