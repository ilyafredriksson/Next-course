"use server";

import  prisma  from "@/utils/prisma";
import { IFormData } from "@/types/for-data";
import { saltAndHashPassword } from "@/utils/password";

export async function registerUser (formData: IFormData) {

    const { email, password,confirmPassword } = formData;

    try {
        const pwHash = await saltAndHashPassword(password);


        if (password !== confirmPassword) {
            throw new Error("Passwords do not match");
        }

        if(password.length < 6){
            throw new Error("Password must be at least 6 characters long");
        }

        const existingUser = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });
        if (existingUser) {
            throw new Error("User with this email already exists");
        }

    const user = await prisma.user.create({
        data: {
            email: email,
            password: pwHash, // Use the hashed password instead of the plain password
        },
    });
    
    
   
    
    return user;
    } catch (error) {
        console.error("Error registering user:", error);
        return{ error: "Registration failed"}
    }
}