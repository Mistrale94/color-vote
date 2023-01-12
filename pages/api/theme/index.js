import prisma from '../../../lib/prisma'

export default async function handle(req, res) {
    const { name, attendees } = req.body;
    const randomNumber = Math.floor(Math.random() * 10000) + 1;
    const result = await prisma.theme.create({
        data: {
            name: name,
            attendees: attendees,
            pincode: randomNumber
        },
    });
    res.json(result);
}