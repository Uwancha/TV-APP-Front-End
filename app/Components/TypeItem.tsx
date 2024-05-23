import { Box, Typography } from '@mui/material';

const TypeItem = ({ name } : { name: string }) => (
  <Box sx={{display: 'flex', flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center', gap:6, color:'white', width:'400px', height:[200, 300], padding:2, backgroundColor:'#1d233a', borderRadius:'4%',
    transition: 'all .8s ease-in-out',
    '&:hover': { boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',backgroundColor: 'rgba(59, 65, 101, 0.87)'}}}
    >
    <Box sx={{width:'90%', height:'40%', backgroundColor:'rgba(1, 1, 32, 1)', display:'flex', justifyContent:'center', alignItems:'center', borderRadius:'2%'}}>
      <img src="https://static.vecteezy.com/system/resources/previews/005/260/970/non_2x/live-stream-live-icon-live-streaming-icon-symbol-free-vector.jpg" style={{borderRadius:'50%'}} width={60} height={60} alt="logo" />
    </Box>
    <Box sx={{alignSelf:'start'}}>
      <Typography variant='h5' component={'p'}>{name}</Typography>
      <Typography variant='body2'>+ 500 {name}</Typography>
    </Box>
  </Box>
);

export default TypeItem;