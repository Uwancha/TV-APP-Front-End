import { Box, Typography } from '@mui/material';

export default function DateAndTime() {
  return (
    <Box sx={{display:"flex", gap:2,  color:'white'}}>
        <Typography variant="body1">24°C</Typography>
        <Typography variant="body1">5:30am</Typography>
        <Typography variant="body1">Saturday, Apr6</Typography>
    </Box>
  );
};
