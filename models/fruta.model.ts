import { Document, model, Schema } from "mongoose";

const frutasSchema = new Schema({
    nombreFruta:{
        type: String,
        require: [true, 'El nombre es requerido']
    },
    usuario:{
        type: String
    },
    tipo: {
        type: String
    },
    imagen:{
         type: String
        //  require: [true, 'La imagen es requerida']
    }

});

interface IFruta extends Document{
    nombreFruta: string;
    usuario: string;
    tipo: string;
    imagen: string;
}

export const Fruta = model<IFruta>('Fruta', frutasSchema);