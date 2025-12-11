"use server";

import  prisma  from "@/utils/prisma";
import { IFormData } from "@/types/for-data";
export async function registerUser (formData: IFormData) {

    const { email, password,confirmPassword } = formData;

    try {
        

    const user = await prisma.user.create({
        data: {
            email: email,
            password: password,
        },
    });
    
    
    console.log("user", user);
    return user;
    } catch (error) {
        console.error("Error registering user:", error);
        return{ error: "Registration failed"}
    }
}