import NextAuth from "next-auth"
import { ZodError } from "zod"
import Credentials from "next-auth/providers/credentials"
import { signInSchema } from "@/schema/zod"

import { getUserFromDb } from "@/utils/user"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/utils/prisma"
 import bcrypt from "bcryptjs"


export const { handlers,signIn,signOut,auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {label: "Email", type: "email" },
        password: {label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          if(credentials?.email || !credentials?.password) {
            throw new Error("Invalid credentials.")
          }
 
          const { email, password } = await signInSchema.parseAsync(credentials)
 
          
 
          // logic to verify if the user exists
        const  user = await getUserFromDb(email )
 
          if (!user||!user.password) {
            throw new Error("Invalid credentials.")
          }

          const isPaswordvalid =await bcrypt.compare(password,user.password);
 
          // return JSON object with the user data
          return {id: user.id, email: user.email};
        } catch (error) {
          if (error instanceof ZodError) {
            // Return `null` to indicate that the credentials are invalid
            return null
          }
          return null
        }
      },
    }),
  ],
})