'use client'

import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Favorite, WatchLater } from "@mui/icons-material";
import { PlayArrow } from "@mui/icons-material";

export const MovieCard = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return isMobile ? <MobileMovieCard/> : <DeskTopMovieCard/>
};

const MobileMovieCard = () => (
    <Box
            sx={{
            backgroundImage: 'url(/photo_2024-05-18_16-23-29.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
    >

        <Box sx={{ backgroundColor: `rgba(17, 17, 19, 0.01)`,
            backgroundImage: `linear-gradient(227deg, rgba(17, 17, 19, 0.01) 0%, rgba(41, 53, 86, 1) 99%)`}}
        >

            <Grid container spacing={2} sx={{ height: '200px', color: 'white' }}>
                <Grid item xs={10} sx={{display:'flex', flexDirection:'column', justifyContent:'flex-end', paddingLeft:2, paddingBottom:4}}>
                    <Typography variant="h5" component="h2">
                        Grey's Anatomy
                    </Typography>
                </Grid>
                <Grid item xs={2} sx={{display:'flex', flexDirection:'column', gap:2, paddingTop:2}}>
                    <Typography variant="body1" component="p" >
                        1h 45m
                    </Typography>
                    <PlayArrow />
                    <WatchLater/>
                    <Favorite/>
                </Grid>
            </Grid>
        </Box>
    </Box>
);

const DeskTopMovieCard = () => (
    <Box
        sx={{ backgroundImage: 'url(/photo_2024-05-18_16-23-29.jpg)',
            backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '2%'
        }}
    >
        <Box sx={{ backgroundColor: `rgba(17, 17, 19, 0.01)`, color:'white', borderRadius: '2%',
            backgroundImage: `linear-gradient(227deg, rgba(17, 17, 19, 0.01) 0%, rgba(41, 53, 86, 1) 99%)`}}
        >
            <Box sx={{display:'flex', flexDirection:'row', justifyContent:'flex-end', paddingTop:2, paddingRight:2}}>
                <Typography variant="body1" component="p">
                    1h 45m
                </Typography>
            </Box>
            <Box sx={{ height: '300px', color: 'white', display:'flex', flexDirection:'column', justifyContent:'flex-end', paddingLeft:2, paddingBottom:4}}>
                <Box >
                    <Typography variant="h5" component="h2">
                        Grey's Anatomy
                    </Typography>
                </Box>
                <Box  sx={{display:'flex', gap:4}}>
                    <PlayArrow />
                    <WatchLater/>
                    <Favorite/>
                </Box>
            </Box>
        </Box>
    </Box>
);
