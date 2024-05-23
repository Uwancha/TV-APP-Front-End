import { IconButton, InputBase, Paper, Fade } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

interface SearchBarProps {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const SearchComponent = ({search, setSearch}: SearchBarProps) => {
    const [open, setOpen] = useState(false);
  
    const handleSearchClick = () => {
        setOpen((prev) => !prev);
    };

    return (
        <Paper sx={{p: '2px 4px', display: 'flex', alignItems: 'center',
            width: open ? '300px' : '40px', transition: 'width 0.3s',}}
        >
            <IconButton sx={{ p: '10px' }} onClick={handleSearchClick}>
                <SearchIcon />
            </IconButton>
             <Fade in={open}>
                <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search' }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />
            </Fade>
        </Paper>
    )
};

export default SearchComponent;