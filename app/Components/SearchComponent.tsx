import { Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchComponent = () => (
    <Box display="flex" alignItems="center" justifyContent={'flex-end'} gap={2}>
        <IconButton >
            <SearchIcon fontSize='large' />
        </IconButton> 
    </Box>
);

export default SearchComponent;