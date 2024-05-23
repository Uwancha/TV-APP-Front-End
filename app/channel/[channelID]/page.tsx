import ResponsiveProgramsPage from "@/app/channel/components/programs/ResponsivePage";

const getPrograms = async (id : string) => {
  const url = process.env.API_URL || 'http://localhost:5000/';
  
  try {
    const res = await fetch(`${url}api/programs/channel/${id}/1`, {
      method:'GET'
    });

    const result = await res.json()
  
    return result;
  } catch (error) {
    console.log(error)    
  };
};
 
export default async function Channel ({ params } : { params: { channelID: string }})  {
  const data = await getPrograms(params.channelID);

  return (
    <ResponsiveProgramsPage data={data} id={params.channelID}/>
  )
};