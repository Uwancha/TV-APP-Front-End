import { Profile } from '@/app/Components/Profile'
import { AccountBoxOutlined, Notifications } from '@mui/icons-material'
import { Box, Grid, Typography } from '@mui/material'

export default function Header({ currentpage } :{currentpage: string} ) {
  return (
    <Grid container sx={{display: 'flex', flexDirection:'row', boxShadow:'0px 8px 8px 1px #d5d6e2', zIndex:1000}}>
        <Grid item xs={4} lg={2} sx={{backgroundColor:'white', color:'black', paddingLeft:2, paddingY:2}}>
            <Typography variant='h6' color={'#161c2f'}>
                T-Movie
            </Typography>
        </Grid>
        <Grid item xs={8} lg={10} sx={{ display: 'flex', justifyContent:'space-between', paddingX:2, backgroundColor:'rgb(22,28,47)', alignItems:'center', paddingY:2}}>
            <Typography variant='h6' sx={{color:'white'}}>
                {currentpage}
            </Typography>
        
            <Box sx={{display: 'flex', gap:2, alignItems:'center'}}>
                <Notifications sx={{color:'white'}}  fontSize='large'/>
                <Profile/> 
            </Box>
            
        </Grid>
    </Grid>
  )
};