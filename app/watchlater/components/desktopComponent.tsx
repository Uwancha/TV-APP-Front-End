import { Box, Grid } from '@mui/material';
import Header from '../../Components/Header';
import Logo from '../../Components/Logo';
import SearchComponent from '../../Components/SearchComponent';
import { AccountBoxRounded } from '@mui/icons-material';
import { MovieCard } from '@/app/Components/MovieCard';
import { useEffect, useState } from 'react';
import Navigation from '../../Components/Navigation';
import { Profile } from '@/app/Components/Profile';

export const WatchLaterDesktop = ({ data }:any) => {
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
        <Box sx={{display: 'flex', backgroundColor:'#161c2f'}}>
            <Box sx={{display:'flex', justifyContent:'center', gap:2, width: '15%', height:'100vh', backgroundColor:'#161c2f'}}>
                <Navigation />
            </Box>
            <Box flex={1}>
            <Header>
                <Logo/>
                <Box sx={{display:'flex', alignItems:'center', gap:2, alignSelf:'flex-end'}}>
                <SearchComponent search={searchQuery} setSearch={setSearchQuery}/>
                <Profile />
                </Box>
            </Header>
        
            <Grid container spacing={4} sx={{marginY: 12, paddingLeft:4}}>
                {filteredData.map((movie:any) => (
                    <Grid key={movie.id} item xs={12} md={6} xl={4} lg={3}>
                        <MovieCard movie={movie}/>
                    </Grid>
                ))} 
            </Grid>
            </Box>
        </Box>
    )
};