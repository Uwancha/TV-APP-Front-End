'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Button,
  Grid,
} from '@mui/material';
import { MaterialReactTable, MRT_ColumnDef, MRT_SortingState, MRT_PaginationState } from 'material-react-table';
import SearchBar from './SearchBar';
import ActionButtons from './ActionButtons';
import { AddChannelForm } from './ChannelForm';

export interface Channel {
  id: number;
  name: string;
};

const ChannelTable = () => {
  const [channels, setChannels] = useState<Channel[]>([]);
  const [total, setTotal] = useState(0);
  const [open, setOpen] = useState(false);
  
  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [sorting, setSorting] = useState<MRT_SortingState>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchChannels();
  }, [pagination, sorting, search]);

  const fetchChannels = async () => {
    const { pageIndex, pageSize } = pagination;
    const sortField = sorting[0]?.id;
    const sortOrder = sorting[0]?.desc ? 'desc' : 'asc';

    const { data } = await axios.get('/dashboard/api/channels', {
      params: {
        page: pageIndex + 1,
        pageSize,
        search,
        sortField,
        sortOrder,
      },
    });
    setChannels(data.channels);
    setTotal(data.total);
  };

  const columns: MRT_ColumnDef<Channel>[] = [
    { accessorKey: 'id', header: 'ID', size: 50 },
    { accessorKey: 'name', header: 'Name', size: 200 },
    {
      accessorKey: 'actions',
      header: 'Actions',
      size: 150,
      Cell: ({ row }) => (
        <ActionButtons />
      ),
    },
  ];

  return (
    <Container sx={{backgroundColor:'white'}}>
      <Grid container sx={{display:'flex', alignItems:'center', justifyContent:'space-between',flex:1}}>
        <Grid item xs={6}>
          <SearchBar search={search} setSearch={setSearch} />
        </Grid>
        <Grid>
          <Button variant="contained" sx={{backgroundColor:'#161c2f'}} onClick={() => setOpen(!open)}>
            Add Channel
          </Button>
        </Grid>
      </Grid>

      <MaterialReactTable
        columns={columns}
        data={channels}
        state={{
          pagination,
          sorting,
        }}
        onPaginationChange={setPagination}
        onSortingChange={setSorting}
        manualPagination
        manualSorting
        enableColumnFilters={false}
        enableFilters={false}
        enableColumnActions={true}
        enableFullScreenToggle={false}
        enableHiding={false}
        enableDensityToggle={false}
        rowCount={total}
        pageCount={Math.ceil(total / pagination.pageSize)}
      />
      <AddChannelForm
        open={open}
        setOpen={setOpen}
      />
    </Container>
  );
};

export default ChannelTable;
