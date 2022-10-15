"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fruta = void 0;
const mongoose_1 = require("mongoose");
const frutasSchema = new mongoose_1.Schema({
    nombreFruta: {
        type: String,
        require: [true, 'El nombre es requerido']
    },
    usuario: {
        type: String
    },
    tipo: {
        type: String
    },
    imagen: {
        type: String
        //  require: [true, 'La imagen es requerida']
    }
});
exports.Fruta = (0, mongoose_1.model)('Fruta', frutasSchema);
