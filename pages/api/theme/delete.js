import { PrismaClient } from "@prisma/client";

export default async function deleteTheme(id) {
    const prisma = new PrismaClient();
    await prisma.theme.delete({
        where: {
            id: id
        }
    });
}
