import prisma from '../../../lib/prisma'

export default async function handle(req, res) {
    const result = await prisma.theme.delete({
        where: {
            id: req.query.id,
        }
    });
    res.json(result);
}