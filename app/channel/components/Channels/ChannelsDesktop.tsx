import { Box } from '@mui/material';
import Header from '../../../Components/Header';
import Banner from '../../../Components/Banner';
import TypeList from '../../../Components/TypeList';
import Sidebar from '../../../Components/Sidebar';
import Logo from '../../../Components/Logo';
import DateAndTime from '../../../Components/DateAndTime';
import SearchComponent from '../../../Components/SearchComponent';
import { Profile } from '../../components/../../Components/Profile';

const types = [{name:'Live TV\'s', logo:'https://static.vecteezy.com/system/resources/previews/005/260/970/non_2x/live-stream-live-icon-live-streaming-icon-symbol-free-vector.jpg'}, {name:'Movies', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUdIUoAKuOvb6xM6KKLgX9cR_GitssWyZcwg&s'}, {name: 'TV Shows', logo:'https://lifecycle.solutions/wp-content/uploads/2016/07/navy-tv.png?x96456'},
  {name: 'Sports', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFVOSzYZQuOTc4fa6jYhTqrsp-TZOYKWEO8zzKZrjSzmI4K0jIizI98F-DZdZrSv0opk&usqp=CAU'}
];

export const ChannelDesktop = ({data}:any) => (
  <Box sx={{display: 'flex', backgroundColor:'#161c2f'}}>
    <Sidebar channels={data} />
    <Box flex={1}>
        <Header>
          <Logo/>
          <Box sx={{display:'flex', alignItems:'center', gap:2, alignSelf:'flex-end'}}>
            <DateAndTime />
            <SearchComponent search='' setSearch={() => console.log('')}/>
            <Profile/>
          </Box>
        </Header>
        <Banner />
        <Box sx={{width:'75%', marginTop: '55vh', position:'absolute', right:0}}>
          <TypeList types={types} />
        </Box>
    </Box>
  </Box>
);