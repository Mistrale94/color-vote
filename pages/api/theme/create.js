import { PrismaClient } from ".prisma/client";

async function createTheme(req, res) {
    const prisma = new PrismaClient();

    const { name, attendees } = req.body;
    const user = req.body.user;
    const randomNumber = Math.floor(Math.random() * 10000) + 1;
    const newTheme = await prisma.theme.create({
        data: {
            name,
            attendees,
            pincode: randomNumber,
            user_id: user
        },
    });

    res.status(200).json(newTheme);
}

export default createTheme;