// import { Server } from 'Socket.IO'

// const SocketHandler = (req, res) => {
//   if (res.socket.server.io) {
//     console.log('Socket is already running')
//   } else {
//     console.log('Socket is initializing')
//     const io = new Server(res.socket.server)
//     res.socket.server.io = io
//   }
//   res.end()
// }

// export default SocketHandler

import { Server } from 'socket.io'

export default async function socket(req, res) {
  if (res.socket.server.io) return res.end()
  const io = new Server(res.socket.server)
  res.socket.server.io = io

  io.on('connection', socket => {
    socket.on('send-connect', async obj => {
    io.emit('connected_user', obj)
    })
  })

  res.end()
}