import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useFormState } from "react-dom";
import { addProgram } from "../actions/programServerActions";

export const AddProgramForm = ({ open, setOpen } : any) => {
    const [formState, action] = useFormState(addProgram, {
        success: false, message: ''
    });

    const types = [
        { name: 'Live TV', id:1 },
        { name: 'Movies' , id:2 },
        { name: 'TV Shows', id:3 },
        { name: 'Sports', id:4 }
    ];
    
    const categories = [
        { name: 'Recommended', id:1 },
        { name: 'Popular', id:2 },
        { name: 'Featured', id:3 },
        { name: 'Favorites', id:4 },
        { name: 'Watch Later', id:5 }
    ];
    
    const channels = [
        { name: 'HBO', id:1 },
        { name: 'ABC TV', id:2 },
        { name: 'NBC TV', id:3 },
        { name: 'AMC TV', id:4 },
        { name: 'Disney', id:5 },
        { name: 'FOX', id:6 },
        { name: 'HULU', id:7}

    ];

    if (formState.success) setOpen(!open);

    return (
        <Dialog open={open} fullWidth={true} >
            <DialogTitle>Add Program</DialogTitle>
                <DialogContent>
                    <form action={action}
                        style={{display:'flex', flexDirection:'column', gap:18 }}
                    >
                        <div style={{display:'flex', flexWrap:'wrap', gap:28, justifyContent:'start'}} >
                            <label htmlFor='videourl'
                                style={{display:'flex', flexDirection:'column', gap:2 }}
                            >   
                                Video URL
                                <input type='text'
                                    id='videourl'
                                    name='videourl'
                                    required
                                    placeholder='Video URL'
                                    style={{ backgroundColor: 'whitesmoke',
                                    paddingLeft: 5,
                                    borderRadius: '5%',
                                    outline: 'none' }}
                                />
                            </label>
                            <label htmlFor='title'
                                style={{display:'flex', flexDirection:'column', gap:2 }}
                            >   
                                Title
                                <input type='text'
                                id='title'
                                name='title'
                                required
                                placeholder='title'
                                style={{ backgroundColor: 'whitesmoke',
                                    paddingLeft: 5,
                                    borderRadius: '5%',
                                    outline: 'none' 
                                }}
                                />
                            </label>
                        </div>
                        
                        <div style={{display:'flex', flexWrap:'wrap', gap:28, justifyContent:'start' }}>
                            <label htmlFor='description'
                                style={{display:'flex', flexDirection:'column', gap:2 }}
                            >   
                                Description
                                <input type='text'
                                id='description'
                                name='description'
                                required
                                placeholder='description'
                                style={{ backgroundColor: 'whitesmoke',
                                    paddingLeft: 5,
                                    borderRadius: '5%',
                                    outline: 'none' 
                                }}
                                />
                            </label>
                            <label htmlFor='posterurl'
                                style={{display:'flex', flexDirection:'column', gap:2 }}
                            >   
                                Poster URL
                                <input type='text'
                                id='posterurl'
                                name='posterurl'
                                required
                                placeholder='Poster URL'
                                style={{ backgroundColor: 'whitesmoke',
                                    paddingLeft: 5,
                                    borderRadius: '5%',
                                    outline: 'none' 
                                }}
                            />
                            </label>
                        </div>

                        <label htmlFor="grades" style={{display:'flex', flexDirection:'column', gap:2, marginTop:16}}>
                            Channel
                            <select name="channel" id="channel">
                                {channels.map( (channel: any)=> (
                                <option key={channel.id} value={`${channel.id}`}>{channel.name}</option>
                                )  ) }
                            </select>
                            </label>
                            <label htmlFor="type" style={{display:'flex', flexDirection:'column', gap:2 }}>
                                Type
                            <select name="type" id="type">
                                {types.map( (type: any)=> (
                                <option key={type.id} value={`${type.id}`}>{type.name}</option>
                                ) ) }
                            </select>
                        </label>  

                        <label htmlFor="category" style={{display:'flex', flexDirection:'column', gap:2 }}>
                            Category
                            <select name="category" id="category">
                                {categories.map( (category: any)=> (
                                    <option key={category.id} value={`${category.id}`}>{category.name}</option>
                                ) ) }
                            </select>
                        </label>
                        
                        <div style={{display:'flex', gap:14, justifyContent:'end', marginTop:16}}>
                            <button type='button' onClick={() => setOpen(!open)} style={{width:'100px',backgroundColor:'white', color:'black', padding:12, borderRadius:'5%'}}>
                                Cancel
                            </button>
                            <button type="submit" style={{width:'100px', backgroundColor:'black', color:'white', padding:12, borderRadius:'5%'}}>
                                Submit
                            </button>
                        </div>
                    <p>{formState?.message}</p>
                </form>
            </DialogContent>
        </Dialog>
    );
};     