import { Router, Request, Response } from "express";

const defaultRoutes = Router();

//Request es la petición del cliente hacia el servidor  y 
//el response es lo que el servidor le responde al cliente
defaultRoutes.get('/',(req: Request, res: Response) => {
    return res.json({
        ok: true,
        msj: 'Todo funciona correctamente'
    });
});

export default defaultRoutes;