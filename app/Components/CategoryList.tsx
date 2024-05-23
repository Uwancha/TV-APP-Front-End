'use client'

import { Box } from '@mui/material'
import Link from 'next/link';
import { useState } from 'react';

export default function CategoryFilter({ channelID }: { channelID:string}) {
  const [selected, setSelected] = useState('Recommended');

  return (
    <Box sx={{display:'flex', gap:2, color:'silver'}}>
      <Link href={`/channel/${channelID}`}
        style={{color:`${selected === 'Recommended' ? 'white': 'whitesmoke'}`, textDecoration:'none'}}
      >
        Recommended
      </Link>
      <Link href={`/channel/${channelID}/2`} 
        style={{color:`${selected === 'Popular' ? 'white': 'whitesmoke'}`, textDecoration:'none'}}
      >
        Popular
      </Link>
      <Link href={`/channel/${channelID}/3`}
        style={{color:`${selected === 'Featured' ? 'white': 'whitesmoke'}`, textDecoration:'none'}}
      >
        Featured
      </Link>
    </Box>
  );
};