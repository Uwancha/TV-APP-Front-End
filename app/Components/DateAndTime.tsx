import { Box, Typography } from '@mui/material';

export default function DateAndTime() {
  return (
    <Box sx={{display:"flex", gap:1,  color:'white'}}>
      <Typography variant="body2">5:30am</Typography>
      <Typography variant="body2">Saturday,Apr6</Typography>
    </Box>
  );
};
