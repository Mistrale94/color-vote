import { Server } from 'Socket.IO'
import { PrismaClient } from '@prisma/client';

const SocketHandler = (req, res) => {
    if (res.socket.server.io) {
        console.log('Socket is already running')
    } else {
        console.log('Socket is initializing')
        const io = new Server(res.socket.server)
        res.socket.server.io = io
        
        io.on('connection', socket => {
            //Rejoindre une room
            socket.on('send-connect', async obj => {
                const prisma = new PrismaClient();
                const pinSession = prisma.theme.findUnique({
                    where: {
                        pincode: obj.pincode,
                    },
                })
                if (pinSession) {
                    socket.join(obj.pincode);

                    socket.broadcast.emit("join-room", obj);
                }
            })


        })
        
}
res.end()
}

    export default SocketHandler