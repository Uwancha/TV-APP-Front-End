'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Button,
  IconButton,
  Grid
} from '@mui/material';
import { MaterialReactTable,  MRT_ColumnDef, MRT_SortingState, MRT_PaginationState } from 'material-react-table';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import SearchBar from './SearchBar';
import ActionButtons from './ActionButtons';
import { AddProgramForm } from './ProgramForm';

export interface Program {
  id: number;
  title: string;
  description: string;
  duration: number;
  status: boolean;
  videoUrl: string;
  channelId: number;
  typeId: number;
  categoryId: number;
}

const ProgramTable = () => {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [total, setTotal] = useState(0);
  const [open, setOpen] = useState(false);

  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [sorting, setSorting] = useState<MRT_SortingState>([]);
  const [search, setSearch] = useState('');
  const [toggleStatus, setToggleStatus] = useState(true)

  useEffect(() => {
    fetchPrograms();
  }, [pagination, sorting, search]);

  const fetchPrograms = async () => {
    const { pageIndex, pageSize } = pagination;
    const sortField = sorting[0]?.id;
    const sortOrder = sorting[0]?.desc ? 'desc' : 'asc';

    const { data } = await axios.get('/dashboard/api/programs', {
      params: {
        page: pageIndex + 1,
        pageSize,
        search,
        sortField,
        sortOrder,
      },
    });
    setPrograms(data.programs);
    setTotal(data.total);
  };

  const columns: MRT_ColumnDef<Program>[] = [
    { accessorKey: 'id', header: 'ID', size: 50 },
    { accessorKey: 'title', header: 'Title', size: 200 },
    { accessorKey: 'description', header: 'Description', size: 300 },
    { accessorKey: 'duration', header: 'Duration', size: 100 },
    {
      accessorKey: 'status',
      header: 'Status',
      size: 100,
      Cell: ({ row }) => (
        <IconButton onClick={() => setToggleStatus(!toggleStatus)}>
          {toggleStatus ? <ToggleOnIcon /> : <ToggleOffIcon />}
        </IconButton>
      ),
    },
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
    <Container sx={{backgroundColor:'white', padding:4}}>
      <Grid container sx={{display:'flex', alignItems:'center', justifyContent:'space-between',flex:1}}>
        <Grid item xs={6}>
          <SearchBar search={search} setSearch={setSearch} />
        </Grid>
        <Grid>
          <Button variant="contained" sx={{backgroundColor:'#161c2f'}} onClick={() => setOpen(!open)}>
            Add Program
          </Button>
        </Grid>
      </Grid>
      
      <MaterialReactTable
        columns={columns}
        data={programs}
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
      <AddProgramForm
        open={open}
        setOpen={setOpen}
      />
    </Container>
  );
};

export default ProgramTable;
