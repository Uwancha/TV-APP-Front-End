import ResponsiveFavoritesPage from "./components/responsiveComponent";

const fetchWatchLaters = async () => {
  const url = process.env.API_URL || 'http://localhost:5000/';
  
  try {
    const res = await fetch(`${url}api/users/1/favorites`, {
      method:'GET'
    });

    const result = await res.json()
  
    return result;
  } catch (error) {
    console.log(error);    
  };
};

export default  async function Favorites ()  {
  const data = await fetchWatchLaters();
 
  return (
    <ResponsiveFavoritesPage data={data} />
  )
};