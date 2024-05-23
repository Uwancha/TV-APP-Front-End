'use server';

import z from "zod";

// Define form state's interface
interface StateType {
    success?: boolean | undefined;
    message?: string | undefined;
};

// Define the schema for movie validation using zod
const idSchema = z.string();
  
export const AddToFavoriteList = async (state: StateType | undefined, form: FormData) => {
    const id = form.get('id')

    // Validate the ID
    const parsedId = idSchema.safeParse(id);
    if (!parsedId.success) {
        return {
            success: false
        };
    };

    const url = process.env.API_URL

    const res = await fetch(`${url}api/users/favorites/1/${id}`, {
        method:'POST'
    });
   
    if (res.ok) {
        return {
            success: true
        };
    };
};

export const AddToWatchLaterList = async(state: StateType | undefined, form: FormData) => {
    const id = form.get('id');

    // Validate the ID
    const parsedId = idSchema.safeParse(id);
    if (!parsedId.success) {
        return {
            success: false
        };
    };
    
    const url = process.env.API_URL

    const res = await fetch(`${url}api/users/watchlater/1/${id}`, {
        method:'POST'
    });
   
    if (res.ok) {
        return {
            success: true
        };
    };
};