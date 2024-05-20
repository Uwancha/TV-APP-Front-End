import { Grid } from '@mui/material';
import { MovieCard } from '../../Components/MovieCard';

export default function ProgramList() {
    const movies = Array(20).fill(null);

    return (
    <Grid container spacing={4}>
        {movies.map((movie, index) => (
            <Grid item xs={12} md={6} xl={4} lg={3}>
                <MovieCard key={index}/>
            </Grid>
        ))} 
    </Grid>
  );
};