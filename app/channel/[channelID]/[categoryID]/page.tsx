import ResponsiveProgramsPage from '@/app/channel/components/programs/ResponsivePage';
import { Box } from '@mui/material';

const fetchPrograms = async ({channelID, categoryID}: {channelID: string, categoryID:string}) => {
  const url = process.env.API_URL || 'http://localhost:5000/';
  
  try {
    const res = await fetch(`${url}api/programs/channel/${channelID}/${categoryID}`, {
      method:'GET'
    });

    const result = await res.json();

    return result;
  } catch (error) {
    console.log(error)    
  };
};

export default async function Programs({ params } : { params: { channelID: string, categoryID: string }}) {
  const {channelID, categoryID} = params

  const data = await fetchPrograms({channelID, categoryID});

  console.log('data', data)

  return (
    <Box>
      <ResponsiveProgramsPage data={data} id={channelID} />
    </Box>
  );
};