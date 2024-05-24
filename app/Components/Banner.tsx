import { Typography, Button, Box, useTheme, useMediaQuery } from '@mui/material';

const Banner = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return isMobile ? (
        <Box
            sx={{ width: '100%', height: '50vh',backgroundImage: 'url(/photo_2024-05-18_16-23-29.jpg)',
            backgroundSize: 'cover', backgroundPosition: 'center', position: 'absolute',
            top:0, zIndex: 0,
            }}
            style={{boxShadow: `0 10px 15px 3px rgba(0,0,0,0.1), inset, 10px 10px 20px 0px, rgba(0,0,0,0.6)`}}
        >

        <Box sx={{ width: '100%',height: '50vh', position: 'absolute', zIndex:2000, backgroundColor: `rgba(17, 17, 19, 0.01)`,
            backgroundImage: `linear-gradient(227deg, rgba(17, 17, 19, 0.01) 0%, rgba(41, 53, 86, 1) 99%)`}}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', color: 'white', gap: 1, paddingLeft:2, marginTop: 16 }}>
                <Typography variant="h3" component="h1" >
                    HBO
                </Typography>
                <Typography variant="h5" component="h2">
                    Grey&apos;s Anatomy
                </Typography>
                <Typography variant="body2">
                    Grey&apos;s Anatomy is an American medical drama television series focusing on the personal and professional lives of surgical interns, residents, and attendings ...    </Typography>
                <Button variant="contained" color="primary" sx={{alignSelf: 'start', backgroundColor:'#161c2f'}}>
                    Watch Now
                </Button>
            </Box>
        </Box>
    </Box>  
  ) : (
    <Box
      sx={{
        width: '75%',
        height: '75vh',
        backgroundImage: 'url(/photo_2024-05-18_16-23-29.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'absolute',
        top:0,
        right:0,
        zIndex: 0,
      }}
    >
      <Box sx={{ width: '100%',height: '80vh', position: 'absolute', zIndex:2000, backgroundColor: `rgba(17, 17, 19, 0.01)`,
        backgroundImage: `linear-gradient(227deg, rgba(17, 17, 19, 0.01) 0%, rgba(41, 53, 86, 1) 99%)`}}
      >

      <Box sx={{ display: 'flex', flexDirection: 'column', color: 'white', gap: 1, paddingLeft:2, marginTop: 6, marginBottom:4}}>
        <Typography variant="h3" component="h1" sx={{marginBottom: 4}}>
          HBO
        </Typography>
        <Typography variant="body2" component="h1" >
          Now is playing
        </Typography>
        <Typography variant="h3" component="h2">
          Grey&apos;s Anatomy
        </Typography>
        <Typography variant="body2" sx={{width: '40%', marginBottom: 4}}>
          Grey&apos;s Anatomy is an American medical drama television series focusing on the personal and professional lives of surgical interns, residents, and attendings ...    </Typography>
        <Button variant="contained" color="primary" sx={{alignSelf: 'start', backgroundColor:'#161c2f'}}>
          Watch Now
        </Button>
      </Box>
      </Box>
    </Box>  
  );
};

export default Banner;