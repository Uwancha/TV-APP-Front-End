import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

const ChannelItem = ({ channel } : { channel: any }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return isMobile ? (
        <Box sx={{width:'100px', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:'100px', gap:2}}>
            <img src={channel.logo} width={40} height={30} alt={channel.name} style={{boxShadow: '0 4px 13.8px 0 #161c2f'}}/>
            <Typography variant="button" color={'white'}>{channel.name}</Typography>
        </Box>
    ) : (
        <Box sx={{width:'100px', display:'flex', alignItems:'center', justifyContent:'center', height:'100px', gap:2}}>
            <img src={channel.logo} width={40} height={30} alt={channel.name} style={{boxShadow: '0 4px 13.8px 0 #161c2f'}}/>
            <Typography variant="button" color={'white'}>{channel.name}</Typography>
        </Box>
    )
};

export default ChannelItem;