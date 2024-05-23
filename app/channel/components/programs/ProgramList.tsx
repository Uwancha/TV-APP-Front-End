import { Grid } from '@mui/material';
import { MovieCard } from '../../../Components/MovieCard';

export default function ProgramList({programs}:any) {
    return (
    <Grid container spacing={4}>
        {programs.map((movie:any) => (
            <Grid item xs={12} md={6} xl={4} lg={3}>
                <MovieCard key={movie.id} movie={movie}/>
            </Grid>
        ))} 
    </Grid>
  );
};