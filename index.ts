import bodyParser from "body-parser";
import mongoose from "mongoose";
import Server from "./classes/server";
import defaultRoutes from "./routes/default.routes";
import frutaRoutes from "./routes/fruta.routes";

const cors = require('cors');
const server = new Server();


server.app.use(cors());
server.app.use(bodyParser.json());
server.app.use(bodyParser.urlencoded({extended: true}));

//Rutas de la aplicación
server.app.use('/', defaultRoutes);
server.app.use('/frutas', frutaRoutes );

mongoose.connect('mongodb+srv://usr_akumanomi:akumanomi2022@cluster0.ccrnzgz.mongodb.net/?retryWrites=true&w=majority', (error) => {
    if(error){
        throw error;
    }
    console.log('Base de datos online!')
})

server.Start(()=>{
    console.log(`Servidor corriendo en puerto: ${server.port}`);

})