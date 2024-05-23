import { Box } from '@mui/material';
import Header from '../../../Components/Header';
import Banner from '../../../Components/Banner';
import TypeList from '../../../Components/TypeList';
import Sidebar from '../../../Components/Sidebar';
import Logo from '../../../Components/Logo';
import DateAndTime from '../../../Components/DateAndTime';
import SearchComponent from '../../../Components/SearchComponent';
import { AccountBoxRounded } from '@mui/icons-material';

const types = ['Live TV\'s', 'Movies', 'TV Shows', 'Sports'];

export const ChannelDesktop = ({data}:any) => (
  <Box sx={{display: 'flex', backgroundColor:'#161c2f'}}>
    <Sidebar channels={data} />
    <Box flex={1}>
        <Header>
          <Logo/>
          <Box sx={{display:'flex', alignItems:'center', gap:2, alignSelf:'flex-end'}}>
            <DateAndTime />
            <SearchComponent search='' setSearch={() => console.log('')}/>
            <AccountBoxRounded fontSize='large' />
          </Box>
        </Header>
        <Banner />
        <Box sx={{width:'75%', marginTop: '55vh', position:'absolute', right:0}}>
          <TypeList types={types} />
        </Box>
    </Box>
  </Box>
);