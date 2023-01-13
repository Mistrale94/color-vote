import { PrismaClient } from "@prisma/client";

export default async function fetchAnswer(req, res) {
    const prisma = new PrismaClient();

    const data = await prisma.answer.findMany({
        select: {
            id: true,
            answer: true,
            firstname: true,
            lastname: true,
            theme_id: true,
            affirmation_id: true,
        }
    });

    res.status(200).json(data);
}
