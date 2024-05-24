import React from 'react';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Program } from './ProgramTable';
import { Channel } from './ChannelTable';
import { Visibility } from '@mui/icons-material';

const ActionButtons= () => {
  return (
    <>
      <IconButton>
        <Visibility />
      </IconButton>
      <IconButton >
        <EditIcon />
      </IconButton>
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </>
  );
};

export default ActionButtons;
