import prisma from '../../../lib/prisma'

export default async function handle(req, res) {
    const { name, attendees } = req.body;
    const result = await prisma.theme.create({
        data: {
            name: name,
            attendees: attendees
        },
    });
    res.json(result);
}