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

const types = [{name:'Live TV\'s', logo:'https://static.vecteezy.com/system/resources/previews/005/260/970/non_2x/live-stream-live-icon-live-streaming-icon-symbol-free-vector.jpg'}, {name:'Movies', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUdIUoAKuOvb6xM6KKLgX9cR_GitssWyZcwg&s'}, {name: 'TV Shows', logo:'https://lifecycle.solutions/wp-content/uploads/2016/07/navy-tv.png?x96456'},
  {name: 'Sports', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFVOSzYZQuOTc4fa6jYhTqrsp-TZOYKWEO8zzKZrjSzmI4K0jIizI98F-DZdZrSv0opk&usqp=CAU'}
];

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