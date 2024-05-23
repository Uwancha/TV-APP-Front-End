import { Box, Link, Typography } from '@mui/material'
import CategoryList from '../../../Components/CategoryList';
import SearchComponent from '../../../Components/SearchComponent';
import { AccountBox, NavigateBefore } from '@mui/icons-material';
import ProgramList from './ProgramList';
import { useEffect, useState } from 'react';

export default function ProgramMobile({ data, id }:{data: any, id: string}) {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        const query = searchQuery.toLowerCase();
        const filtered = data.filter((item: any) =>
            item.title.toLowerCase().includes(query)
        );

        setFilteredData(filtered);
    }, [searchQuery, data]);

    return (
        <Box>
            <Box sx={{ display:'flex', flexDirection:'column', gap:4, padding: 2, marginBottom:2}}>
                <Box sx={{ width:'90%',display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                    <Box sx={{display:'flex', alignItems:'center', gap:2}}>
                        <Link href={'/channel'}>
                            <NavigateBefore fontSize='large'/>
                        </Link>
                        <Typography color={'white'}>Movies</Typography>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:4}}>
                        <SearchComponent search={searchQuery} setSearch={setSearchQuery}/>
                        <AccountBox />
                    </Box>
                </Box>
                <CategoryList channelID={id}/>
            </Box>
            <ProgramList programs={filteredData} />
        </Box>
    );
};