import ResponsiveChannelPage from "./components/Channels/ResponsivePage";

const fetchChannels = async () => {
  const url = process.env.API_URL || 'http://localhost:5000/';
  
  try {
    const res = await fetch(`${url}api/channels`, {
      method:'GET'
    });

    const result = await res.json()
  
    return result;
  } catch (error) {
    console.log(error);    
  };
};

export default  async function Channel ()  {
  const data = await fetchChannels();
 
  return (
    <ResponsiveChannelPage data={data} />
  )
};