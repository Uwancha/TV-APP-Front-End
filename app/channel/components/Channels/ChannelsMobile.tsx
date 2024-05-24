import React from 'react';
import { Box } from '@mui/material';
import Banner from '../../../Components/Banner';
import ChannelList from '../../../Components/ChannelList';
import TypeList from '../../../Components/TypeList';
import Navigation from '../../../Components/Navigation';
import Header from '@/app/Components/Header';
import Logo from '@/app/Components/Logo';
import DateAndTime from '@/app/Components/DateAndTime';
import SearchComponent from '@/app/Components/SearchComponent';

const types = ['Live TV\'s', 'Movies', 'TV Shows', 'Sports'];

export const ChannelMobile = ({ data }: any) => (
  <>
    <Header >
      <Logo/>
      <Box sx={{display:'flex', alignItems:'center', alignSelf:'flex-end'}}>
        <DateAndTime />
        <SearchComponent search='' setSearch={() => console.log('')}/>
      </Box>
    </Header>
    <Banner />
    <Box sx={{display: 'flex', flexDirection:'column', marginTop: '50vh'}}>
        <ChannelList channels={data} />
        <TypeList types={types} />
        <Box sx={{ position: 'fixed', bottom: 0, width: '100%' }}>
          <Navigation />
        </Box>
    </Box>
  </>
);