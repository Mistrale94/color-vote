import { compare } from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      const prisma = new PrismaClient();

      const { email, password } = req.body;

      let resultUser = await prisma.user.findUnique({
        where: {
          email
        }
      });

      if (resultUser) {
        const checkUserPassword = await compare(password, resultUser.password);
        if (!checkUserPassword) {
          res.status(500).json("Mot de passe ou nom d'utilisateur incorrect");
        } else {
          res.status(200).json({
            id: resultUser.id,
            email: resultUser.email
          });
        }
      }

      if (!resultUser) {
        res.status(500).json('Aucun utilisateur trouvé');
      }
    }
  } catch (e) {
    console.log(e);
  }
}