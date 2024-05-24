'use server'

import { z } from 'zod';

interface StateType {
    success: boolean;
    message: string;
}

const programSchema = z.object({
    channelID: z.string().min(1, "Channel ID is required"),
    typeID: z.string().min(1, "Type ID is required"),
    categoryID: z.string().min(1, "Category ID is required"),
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    videoUrl: z.string().url("Invalid video URL"),
    posterUrl: z.string().url("Invalid poster URL")
});

export async function addProgram (formState: StateType | undefined, formData: FormData) {
    const data = {
        channelID: formData.get('channel'),
        typeID: formData.get('type'),
        categoryID: formData.get('category'),
        title :formData.get('title'),
        description:formData.get('description'),
        videoUrl:formData.get('videoUrl'),
        posterUrl: formData.get('posterurl')
    };

    try {
        // Validate the data using Zod
        const parsedData = programSchema.parse(data);
        
        const url = process.env.API_URL || 'http://localhost:5000/';
        
        const res = await fetch(`${url}api/programs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (res.ok) {
            return { success: true, message: 'Program added successfully' };
        } else {
            return {success: false, message: 'Server error'};
        }; 
    } catch (error) {
        return { success : false, message: 'Something went wrong. Try again!' };
    };
};