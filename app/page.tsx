'use client'

import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Link from 'next/link';

const LoginContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '100vh',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#161c2f',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2),
  },
}));

const LoginFormContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: 'white',
  padding: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2),
  },
}));

const Form = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

export default function LoginPage() {
  return (
    <LoginContainer>
      <LogoContainer>
        <Typography variant="h1" style={{ color: 'white', fontSize: '3rem' }}>
          T-Movie
        </Typography>
      </LogoContainer>
      <LoginFormContainer>
        <Typography variant="h4" gutterBottom>
          LOGIN
        </Typography>
        <Form>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth 
          />

          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth  
          />
          <Link href={'/dashboard'}>
            <Button type="submit" variant="contained" fullWidth sx={{backgroundColor:'black'}}>
              Login
            </Button>
          </Link>
        </Form>
        <Box style={{ marginTop: 8}}>
          <Link href={'/channel'} style={{textDecoration:'none', color: '#161c2f', marginTop: 8}}>
            Go To Customer Page
          </Link>
        </Box>
      </LoginFormContainer>
    </LoginContainer>
  );
};
