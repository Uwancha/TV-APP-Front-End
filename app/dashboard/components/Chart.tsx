'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Grid, Paper, Typography, List, ListItem, ListItemText, ListItemIcon, Box, Button } from '@mui/material';
import { VictoryPie, VictoryChart, VictoryLine, VictoryTheme } from 'victory';
import { People } from '@mui/icons-material';
import { io } from 'socket.io-client';

interface DashboardData {
  userCount: number;
  programCount: number;
  channelCount: number;
  programsByCategory: { categoryId: number; categoryName: string; count: number }[];
  programsByType: { typeId: number; typeName: string; count: number }[];
  programsByTypeByDay: { typeName: string; day: string; count: number }[];
}

const url = process.env.API_URL as string
const socket = io(url);

const DashboardChart = () => {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    fetchData();
    socket.on('dashboardUpdate', () => fetchData);
    return () => {
      socket.disconnect();
    };
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/dashboard/api/charts');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  };

  if (!data) return <div>Loading...</div>;

  const pieData = data.programsByCategory.map((item) => ({
    x: item.categoryName,
    y: item.count,
  }));

  const lineData = data.programsByType.map((item) => ({
    type: item.typeName,
    count: item.count,
  }));

  return (
    <Container sx={{margin:2, paddingY:4, backgroundColor:'white'}}>
      <Grid container spacing={10}>
        <Grid item xs={12} sm={6} xl={3}>
          <Paper elevation={2} sx={{display:'flex', justifyContent:'space-between', padding:1.5}}>
            <Box>
              <Typography variant="h6">System User</Typography>
              <Typography variant="h6">{data.userCount}</Typography>
            </Box>
            <People/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} xl={3}>
          <Paper elevation={2} sx={{display:'flex', justifyContent:'space-between', padding:1.5}}>
            <Box>
              <Typography variant="h6">Program</Typography>
              <Typography variant="h6">{data.programCount}</Typography>
            </Box>
            <People/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} xl={3}>
          <Paper elevation={2} sx={{display:'flex', justifyContent:'space-between', padding:1.5}}>
            <Box>
            <Typography variant="h6">Channel</Typography>
            <Typography variant="h6">{data.channelCount}</Typography>
            </Box>
            <People/>
          </Paper>
        </Grid>
        <Grid item xs={12} xl={6}>
          <Paper elevation={4}>
            <Button variant='contained' sx={{marginTop:-4, backgroundColor:'#161c2f'}}>
              <Typography variant="h6">Programs by Category</Typography>
            </Button>
            <Grid container spacing={2} sx={{display:'flex'}}>
              <Grid item xs={12} sm={6} lg={6}>
                <VictoryPie
                  data={pieData}
                  innerRadius={80}
                  labelRadius={100}
                  labels={() => null}
                  style={{
                    data: { fill: ({ datum }) => getColorForCategory(datum.x) },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4} lg={4}>
                <List>
                  {data.programsByCategory.map((item, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <div style={{ width: 16, height: 16, backgroundColor: getColorForCategory(item.categoryName) }} />
                      </ListItemIcon>
                      <ListItemText primary={item.categoryName} />
                      <Typography>{item.count}</Typography>
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} xl={11}>
          <Paper elevation={4}>
            <Button variant='contained' sx={{marginTop:-4, backgroundColor:'#161c2f'}}>
              <Typography variant="h6">Programs by Type</Typography>
            </Button>
            <Grid container spacing={2} sx={{display:'flex', padding:4}}>
              <Grid item xs={12} sm={8}>
                <VictoryChart theme={VictoryTheme.material}>
                  <VictoryLine
                    data={lineData}
                    style={{ data: { stroke: "#c43a31" } }}
                    x="type"
                    y="count"
                  />
                </VictoryChart>
              </Grid>
              <Grid item xs={12} sm={4} sx={{marginTop:6}}>
                <Button variant='contained' sx={{display:'flex', flexDirection:'column', backgroundColor:'#161c2f'}}>
                  <Typography variant="h5">{data.programCount}</Typography>
                  <Typography variant="h6">overall program</Typography>
                </Button>
                <List>
                  {lineData.map((item, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <div style={{ width: 16, height: 16, backgroundColor: getColorForType(item.type) }} />
                      </ListItemIcon>
                      <ListItemText primary={item.type} />
                      <Typography>{item.count}</Typography>
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

const getColorForCategory = (category: string): string => {
  const colors: { [key: string]: string } = {
    "Recommended": "#FF5733",
    "Popular": "#33FF57",
    "Featured": "#3357FF",
    "Favorites": "#FF33A8",
    "Watch Later": "#A833FF",
  };
  return colors[category] || "#CCCCCC";
};

const getColorForType = (type: string): string => {
  const colors: { [key: string]: string } = {
    "Live TV": "#FF5733",
    "Movies": "#33FF57",
    "TV Shows": "#3357FF",
    "Sports": "#FF33A8",
  };
  return colors[type] || "#CCCCCC";
};

export default DashboardChart;

