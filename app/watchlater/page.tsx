import ResponsiveWatchLaterPage from "./components/responsiveComponent";

const fetchWatchLaters = async () => {
  const url = process.env.API_URL || 'http://localhost:5000/';
  
  try {
    const res = await fetch(`${url}api/users/1/watchlater`, {
      method:'GET'
    });

    const result = await res.json()
  
    return result;
  } catch (error) {
    console.log(error);    
  };
};

export default  async function WatchLaters ()  {
  const data = await fetchWatchLaters();
 
  return (
    <ResponsiveWatchLaterPage data={data}/>
  )
};