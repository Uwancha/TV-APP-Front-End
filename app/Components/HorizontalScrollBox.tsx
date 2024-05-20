import Box from '@mui/material/Box';
import { styled } from '@mui/material';

export const HorizontalScrollBox = styled(Box)({
    display: 'flex',
    overflowX: 'auto',
    overflowY: 'hidden',
    whiteSpace: 'nowrap',
    '&::-webkit-scrollbar': {
        display: 'none',
    },
    '-ms-overflow-style': 'none', 
    'scrollbar-width': 'none', 
    transition: 'transform 5s ease-in-out', 
});