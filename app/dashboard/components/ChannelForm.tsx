import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useFormState } from "react-dom";
import { AddChannel } from "../actions/channelServerActions";

export const AddChannelForm = ({ open, setOpen } : any) => {
    const [formState, action] = useFormState(AddChannel, {
        success: false, message: ''
    });

    if (formState.success) setOpen(!open);

    return (
        <Dialog open={open} fullWidth={true} >
            <DialogTitle>Add Channel</DialogTitle>
                <DialogContent>
                    <form action={action}
                        style={{display:'flex', flexDirection:'column', gap:18 }}
                    >
                        <label htmlFor='name'
                            style={{display:'flex', flexDirection:'column', gap:2 }}
                        >   
                            Channel Name
                            <input type='text'
                                id='name'
                                name='name'
                                required
                                placeholder='Channel Name'
                                style={{ backgroundColor: 'whitesmoke',
                                    paddingLeft: 5,
                                    borderRadius: '5%',
                                    outline: 'none' 
                                }}
                            />
                        </label>
                        
                        <label htmlFor='logo'
                            style={{display:'flex', flexDirection:'column', gap:2 }}
                        >   
                            Channel Logo
                            <input type='text'
                                id='logo'
                                name='logo'
                                required
                                placeholder='Logo URL'
                                style={{ backgroundColor: 'whitesmoke',
                                    paddingLeft: 5,
                                    borderRadius: '5%',
                                    outline: 'none' 
                                }}
                            />
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