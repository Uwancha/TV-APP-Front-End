import { Dashboard, LinkRounded } from '@mui/icons-material'
import { Box, Link, Typography } from '@mui/material'

export default function Navigation() {
  return (
    <Box sx={{display: 'flex', flexDirection:'column', gap:4, color:'black', paddingLeft:4, paddingTop:14}}>
        <Link href={'/dashboard'} sx={{display: 'flex', alignItems:'center', gap:2, color:'inherit', textDecoration:'none'}}>
            <Dashboard fontSize='large'/>
            <Typography variant='h6' component={'p'}>
                Dashboard
            </Typography>
        </Link>
        <Link href={'/dashboard/programs'} sx={{display: 'flex', alignItems:'center', gap:2, color:'inherit', textDecoration:'none'}}>
            <LinkRounded fontSize='large'/>
            <Typography variant='h6' component={'p'}>
                Program
            </Typography>
        </Link>
        <Link href={'/dashboard/channels'} sx={{display: 'flex', alignItems:'center', gap:2, color:'inherit', textDecoration:'none'}}>
            <LinkRounded fontSize='large'/>
            <Typography variant='h6' component={'p'}>
                Channel
            </Typography>
        </Link>
    </Box>
  )
}
