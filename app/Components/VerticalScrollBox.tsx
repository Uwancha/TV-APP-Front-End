import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const ScrollBox = styled(Box)({
    overflowY: 'auto',
    overflowX: 'hidden',
    '&::-webkit-scrollbar': {
        display: 'none',
    },
    '-ms-overflow-style': 'none', 
    'scrollbar-width': 'none',
    transition: 'transform 3s ease-in-out'
});