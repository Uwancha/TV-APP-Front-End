 export async function GET() {
    const url = process.env.API_URL

    const res = await fetch(`${url}api/dashboard`, {
        method:'GET'
    });
   
    const data = await res.json();

    console.log(data)
 
    return Response.json(data);
};