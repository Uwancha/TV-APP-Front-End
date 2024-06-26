import { Box } from '@mui/material';
import ChannelList from './ChannelList';
import Navigation from './Navigation';

const Sidebar = ({ channels }: { channels: any }) => (
  <Box sx={{display:'flex', justifyContent:'center', gap:4, width: '25%', height:'100vh', backgroundColor:'#161c2f'}}>
    <Navigation />
    <ChannelList channels={channels} />
  </Box>
);

export default Sidebar;