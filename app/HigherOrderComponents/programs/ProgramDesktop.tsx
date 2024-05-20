import { Box, Grid, Link, Typography } from '@mui/material'
import CategoryList from '../../Components/CategoryList';
import DateAndTime from '../../Components/DateAndTime';
import SearchComponent from '../../Components/SearchComponent';
import { AccountBox, NavigateBefore } from '@mui/icons-material';
import ProgramList from './ProgramList';
import Navigation from '../../Components/Navigation';

export default function ProgramDesktop() {
    return (
        <Grid container>
            <Grid item xl={2} lg={2} sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between', gap:26, height:'50vh', marginTop:2, padding:4}}>
                <Link href={'/channel'}>
                    <NavigateBefore fontSize='large'/>
                </Link>
                <Navigation />
            </Grid>
            <Grid item md={10}  xl={10} lg={10}>
            <Box sx={{ display:'flex', flexDirection:'column', gap:2, padding: 2, marginBottom:2}}>
                <Box sx={{ display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                    <Box sx={{display:'flex', alignItems:'center', gap:2}}>
                        <Typography color={'white'}>Movies</Typography>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:2}}>
                        <DateAndTime />
                        <SearchComponent/>
                        <AccountBox />
                    </Box>
                </Box>
                <CategoryList />
            </Box>
            <ProgramList />
            </Grid>
        </Grid>
    );
};