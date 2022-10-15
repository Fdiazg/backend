import bodyParser from "body-parser";
import mongoose from "mongoose";
import Server from "./classes/server";
import defaultRoutes from "./routes/default.routes";
import frutaRoutes from "./routes/fruta.routes";

const server = new Server();

server.app.use(bodyParser.json());
server.app.use(bodyParser.urlencoded({extended: true}));

//Rutas de la aplicación
server.app.use('/', defaultRoutes);
server.app.use('/frutas', frutaRoutes );

mongoose.connect('mongodb://localhost:27017/akumaNoMiDb', (error) => {
    if(error){
        throw error;
    }
    console.log('Base de datos online!')
})

server.Start(()=>{
    console.log(`Servidor corriendo en puerto: ${server.port}`);

})