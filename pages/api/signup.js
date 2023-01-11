import { hash } from "bcryptjs";
import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
    try{
        const prisma = new PrismaClient();

        if (req.method === 'POST') {
            const {firstName, lastName, email, password} = req.body;
            if (!firstName || !lastName || !email || !password) {
                res.status(422).json({message: "Données invalides"});
                return;
            }
            const userExist = await prisma.user.findUnique({
                where: {
                    email
                }
            });
            if (userExist) {
                res.status(500).json({ message: 'Existe déjà' });
            }
            const newUser = await prisma.user.create({
                data: {
                  firstName,
                  lastName,
                  email,
                  password: await hash(password, 12)
                }
            });
            res.status(201).json({
                id: newUser.id,
                email: newUser.email
            });         
        } else {
            res.status(500).json({ message: 'Erreur' });
        }
    } catch (e) {
        console.log(e);
    }
}