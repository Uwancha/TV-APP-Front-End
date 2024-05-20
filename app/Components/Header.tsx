import { Box } from '@mui/material';
import { ReactNode } from 'react';

const Header = ({children}: {children: ReactNode}) => (
  <Box
    sx={{ position: 'absolute', left:2, right:2, top:0, display:'flex', alignItems:'center',justifyContent:'space-between', zIndex: 1000, padding: 2 }}
  >
    {children}
  </Box>
);

export default Header;