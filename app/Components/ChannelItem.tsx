import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Link from 'next/link';

const ChannelItem = ({ channel } : { channel: any }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return isMobile ? (
        <Link href={`channel/${channel.id}`} style={{textDecoration:'none'}}>
            <Box sx={{ backgroundColor:`${channel.name === 'HBO' ? 'rgba(255, 255, 255, 0.14)': ''}`, borderRadius:`${channel.name == 'HBO' ? '50%': ''}`, 
                width:'150px', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:'150px', gap:2}}
            >
                <img src={channel.logo} width={30} height={30} alt={channel.name} style={{boxShadow: '0 4px 13.8px 0 #161c2f'}}/>
                <Typography variant="button" color={'white'}>{channel.name}</Typography>
            </Box>
        </Link>
    ) : (
        <Link href={`channel/${channel.id}`} style={{textDecoration:'none'}}>
            <Box sx={{backgroundColor:`${channel.name == 'HBO' ? 'rgba(255, 255, 255, 0.14)': ''}`, borderRadius:`${channel.name == 'HBO' ? '50%': ''}`,
                width:'150px', display:'flex', alignItems:'center', justifyContent:'center', height:'150px', gap:2}}
            >
                <img src={channel.logo} width={30} height={30} alt={channel.name} style={{boxShadow: '0 4px 13.8px 0 #161c2f'}}/>
                <Typography variant="button" color={'white'}>{channel.name}</Typography>
            </Box>
        </Link>
    )
};

export default ChannelItem;