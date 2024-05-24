import { useMediaQuery, useTheme } from '@mui/material';
import ChannelItem from './ChannelItem';
import { ScrollBox } from './VerticalScrollBox';
import { HorizontalScrollBox } from './HorizontalScrollBox';

const ChannelList = ({ channels } : { channels: any }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return isMobile ? (
    <HorizontalScrollBox display="flex" flexDirection="row"
      sx={{ width:'90vw', bg: 'background.paper', display:'flex', gap:6, marginTop:2, backgroundColor:'#161c2f', paddingLeft:2, paddingRight:2,
      }}
    >
      {channels.map((channel: any) => (
        <ChannelItem key={channel.id} channel={channel} />
      ))}
    </HorizontalScrollBox>
  ) : (
    <ScrollBox sx={{height: '100vh', display:'flex', flexDirection:'column', gap:6, paddingTop:2, paddingBottom:2, backgroundColor:'#161c2f'}}>
      {channels.map((channel: any) => (
        <ChannelItem key={channel.id} channel={channel} />
      ))}
  </ScrollBox>
  )
};

export default ChannelList;