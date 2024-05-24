'use server'

import { z } from 'zod';

interface StateType {
    success: boolean;
    message: string;
}

const programSchema = z.object({
    name: z.string().min(1, "Channel name is required"),
    logo: z.string().url("Invalid logo URL"),
});

export async function AddChannel (formState: StateType | undefined, formData: FormData) {
    const data = {
        name: formData.get('name'),
        logo: formData.get('logo')
    };


    try {
        // Validate the data using Zod
        const parsedData = programSchema.parse(data);
        
        const url = process.env.API_URL || 'http://localhost:5000/';
        
        const res = await fetch(`${url}api/channels`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (res.ok) {
            return { success: true, message: 'Channel added successfully' };
        } else {
            return {success: false, message: 'Server error'};
        };
    } catch (error) {
        return { success : false, message: 'Something went wrong. Try again!' };
    };
};