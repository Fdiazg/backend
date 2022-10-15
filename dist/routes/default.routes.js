"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const defaultRoutes = (0, express_1.Router)();
//Request es la petición del cliente hacia el servidor  y 
//el response es lo que el servidor le responde al cliente
defaultRoutes.get('/', (req, res) => {
    return res.json({
        ok: true,
        msj: 'Todo funciona correctamente'
    });
});
exports.default = defaultRoutes;
