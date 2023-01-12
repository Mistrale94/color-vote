import { PrismaClient } from ".prisma/client";

export const config = {
    api: {
      bodyParser: false
    }
};

async function createTheme(req, res) {
    console.log('avant')
    try{
        const prisma = new PrismaClient();
    
        const { name, attendees, user } = req.body;

        const randomNumber = Math.floor(Math.random() * 10000) + 1;

        const newTheme = await prisma.theme.create({
            data: {
            name: name,
            attendees: attendees,
            pincode: randomNumber,
            user_id: user,
            },
        });
            
        res.status(200).json(newTheme);

    } catch (e) {
        console.log(e);
    }

}

export default createTheme;