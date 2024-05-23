import { useFormState } from "react-dom"
import { AddToFavoriteList, AddToWatchLaterList } from "../actions/personilizationsServerAction"
import { Favorite, FavoriteBorder, WatchLater, WatchLaterOutlined } from "@mui/icons-material"

export const AddToFavorite = ({ id }:{id: string}) => {
    const [state, formAction] = useFormState(AddToFavoriteList, { success: false})
   
    if (state?.success) {
        return <Favorite />  
    };

    return (
      <form action={formAction} style={{backgroundColor:'none'}}>
        <input type="text" hidden value={id} name="id" readOnly required />
        <button
            type="submit"
            style={{backgroundColor:'transparent', border:'none'}}
        >
            <FavoriteBorder sx={{color:'white'}}/>
        </button>
      </form>
    )
}

export const AddToWatchLater = ({ id }:{ id: string }) => {
    const [state, formAction] = useFormState(AddToWatchLaterList, { success: false})
   
    if (state?.success) {
        return <WatchLater/> 
    };

    return (
      <form action={formAction}
      >
        <input type="text" hidden value={id} name="id" readOnly required />
        <button
            type="submit"
            style={{backgroundColor:'transparent', border:'none', borderRadius:'50%', margin:0}}
        >
            <WatchLaterOutlined sx={{color:'white'}} />
        </button>
      </form>
    )
};