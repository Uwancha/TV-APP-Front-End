import { Box, Link } from '@mui/material'

export default function CategoryFilter() {
  return (
    <Box sx={{display:'flex', gap:2, color:'silver'}}>
        <Link href={'/channel/recommended'} variant='h6' color="inherit" underline="none" >
            Recommended
        </Link>
        <Link href={'/channel/populars'} variant='h6' color="inherit" underline="none">
            Popular
        </Link>
        <Link href={'/channel/featured'} variant='h6' color="inherit" underline="none">
            Featured
        </Link>
    </Box>
  );
};