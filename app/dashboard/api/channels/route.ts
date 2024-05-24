import { type NextRequest } from 'next/server'
 
export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const page = searchParams.get('page')
    const pageSize =searchParams.get('pageSize')
    const search =searchParams.get('search')
    const sortField =searchParams.get('sortField')
    const sortOrder =searchParams.get('sortOrder')

    const params = new URLSearchParams({
        page: String(page),
        pageSize: String(pageSize),
        ...(search && { search }),
        ...(sortField && { sortField }),
        ...(sortOrder && { sortOrder })
    });

    const url = process.env.API_URL

    const res = await fetch(`${url}api/channels?${params.toString()}`, {
        method:'GET'
    });

    const data = await res.json();
 
    return Response.json(data);
};