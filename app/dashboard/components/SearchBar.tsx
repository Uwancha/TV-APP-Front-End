import React from 'react';
import { TextField } from '@mui/material';

interface SearchBarProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar: React.FC<SearchBarProps> = ({ search, setSearch }) => (
  <TextField
    fullWidth
    label="Search"
    variant="outlined"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    sx={{ margin: '10px 0' }}
  />
);

export default SearchBar;
