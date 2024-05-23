import { Box, Grid, Link, Typography } from '@mui/material'
import SearchComponent from '../../Components/SearchComponent';
import { AccountBox, NavigateBefore } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { MovieCard } from '@/app/Components/MovieCard';

export default function FavoritesMobile({ data }:{data: any}) {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        const query = searchQuery.toLowerCase();
        const filtered = data.filter((item: any) =>
            item.title.toLowerCase().includes(query)
        );

        setFilteredData(filtered);
    }, [searchQuery, data]);

    return (
        <Box sx={{display:'flex', flexDirection:'column', gap:4, marginBottom:2}}>
            <Box sx={{ display:'flex', flexDirection:'column', gap:4, padding: 2, marginBottom:2}}>
                <Box sx={{ width:'90%',display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                    <Box sx={{display:'flex', alignItems:'center', gap:2}}>
                        <Link href={'/channel'}>
                            <NavigateBefore fontSize='large'/>
                        </Link>
                        <Typography color={'white'}>Favorites</Typography>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:4}}>
                        <SearchComponent search={searchQuery} setSearch={setSearchQuery}/>
                        <AccountBox />
                    </Box>
                </Box>
            </Box>
            <Grid container spacing={6} >
                {filteredData.map((movie:any) => (
                <Grid item xs={12} md={6} xl={4} lg={3}>
                    <MovieCard key={movie.id} movie={movie}/>
                </Grid>
                ))} 
            </Grid>
        </Box>
    );
};