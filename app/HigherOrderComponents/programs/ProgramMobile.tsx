import { Box, Grid, Link, Typography } from '@mui/material'
import CategoryList from '../../Components/CategoryList';
import SearchComponent from '../../Components/SearchComponent';
import { AccountBox, NavigateBefore } from '@mui/icons-material';
import ProgramList from './ProgramList';

export default function ProgramMobile() {
    return (
        <Box>
            <Box sx={{ display:'flex', flexDirection:'column', gap:4, padding: 2, marginBottom:2}}>
                <Box sx={{ width:'90%',display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                    <Box sx={{display:'flex', alignItems:'center', gap:2}}>
                        <Link href={'/channel'}>
                            <NavigateBefore fontSize='large'/>
                        </Link>
                        <Typography color={'white'}>Movies</Typography>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:4}}>
                        <SearchComponent/>
                        <AccountBox />
                    </Box>
                </Box>
                <CategoryList />
            </Box>
            <ProgramList />
        </Box>
    );
};