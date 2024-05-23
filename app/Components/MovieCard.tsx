'use client'

import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Favorite, FavoriteBorder, WatchLater } from "@mui/icons-material";
import { PlayArrow } from "@mui/icons-material";
import { AddToFavorite, AddToWatchLater } from "./AddToFavorite";

export const MovieCard = ({movie}: any) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return isMobile ? <MobileMovieCard movie={movie}/> : <DeskTopMovieCard movie={movie} />
};

const MobileMovieCard = ({movie}:any) =>  (
    <Box
        sx={{
            backgroundImage: `url(${movie.posterURL})`,
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
                        {movie.title}
                    </Typography>
                </Grid>
                <Grid item xs={2} sx={{display:'flex', flexDirection:'column', gap:2, paddingTop:2}}>
                    <Typography variant="body1" component="p" >
                        {movie.duration}
                    </Typography>
                    
                    <PlayArrow />
                    <AddToWatchLater id={movie.id} />
                    <AddToFavorite id={movie.id} />
                </Grid>
            </Grid>
        </Box>
    </Box>
)

const DeskTopMovieCard = ({movie}:any) => {
    return (
        <Box
            sx={{ backgroundImage: `url(${movie.posterURL})`,
            backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '2%'
            }}
        >
            <Box sx={{ backgroundColor: `rgba(17, 17, 19, 0.01)`, color:'white', borderRadius: '2%',
                backgroundImage: `linear-gradient(227deg, rgba(17, 17, 19, 0.01) 0%, rgba(41, 53, 86, 1) 99%)`}}
            >
                <Box sx={{display:'flex', flexDirection:'row', justifyContent:'flex-end', paddingTop:2, paddingRight:2}}>
                <Typography variant="body1" component="p">
                    {movie.duration}
                </Typography>
                </Box>
                <Box sx={{ height: '300px', color: 'white', display:'flex', flexDirection:'column', justifyContent:'flex-end', paddingLeft:2, paddingBottom:4}}>
                    <Box >
                        <Typography variant="h5" component="h2">
                        {movie.title}
                        </Typography>
                    </Box>
                <Box  sx={{display:'flex', gap:4}}>
                    <PlayArrow />
                    <AddToWatchLater id={movie.id} />
                    <AddToFavorite id={movie.id} />
                </Box>
            </Box>
            </Box>
        </Box>
    )
};
