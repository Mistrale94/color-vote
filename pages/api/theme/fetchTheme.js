import { PrismaClient } from "@prisma/client";

export default async function fetchTheme(req, res) {
    const prisma = new PrismaClient();

    const data = await prisma.theme.findMany({
        select: {
            id: true,
            name: true,
            pincode: true,
            attendees : true,
        }
    });

    res.status(200).json(data);
}
