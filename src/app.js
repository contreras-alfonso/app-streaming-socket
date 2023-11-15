import express from 'express'
import { createServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';
import router from './routes/zoomRoutes.js';

const app = express();
const server = createServer(app);
const io = new SocketIOServer(server);


//rutas
app.use('/',router);
//donde vamos a cargar los html con los que vamos a trabajar.
app.use(express.static('./src/public'))

io.on('connection',(socket)=>{
    socket.on('stream',(image)=>{
        //emitir el evento a todos los sockets connectados
        socket.broadcast.emit('stream',image);
        
    })
})


export {
    server
}