import prisma from "./prisma"

export async function getCurrentUser(email: string) {
    return await prisma.user.findFirst({
        where: {
            email: email
        }
    })
}

export async function getUserFromDb(email: string) {
    return await prisma.user.findUnique({
        where: {
            email: email
        }
    })
}