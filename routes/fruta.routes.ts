import { Request, Response, Router } from "express";
import { Fruta } from "../models/fruta.model";

const frutaRoutes = Router();

frutaRoutes.get("/", async (req: Request, res: Response) => {
  const frutas = await Fruta.find();

  return res.json({
    ok: true,
    frutas,
  });
});

frutaRoutes.get('/paging', async (req: Request, res: Response) =>{

    

    let perPage = 5;
    let page = Number(req.query.page) || 1;
    let skip = page - 1;
    skip = skip * perPage;
    const frutas = await Fruta.find().skip(skip).limit(perPage);

    return res.json({
        ok: true,
        frutas
    })
})






frutaRoutes.post("/", (req: Request, res: Response) => {
  const body = req.body;

  const fruta = {
    nombreFruta: body.nombreFruta,
    usuario: body.usuario,
    tipo: body.tipo,
    imagen: body.imagen,
  };

  Fruta.create(fruta)
    .then((frutaDb) => {
      return res.json({
        ok: true,
        frutaDb,
      });
    })
    .catch((err) => {
      return res.json({
        ok: false,
        err,
      });
    });
});
//Lo que manda el cliente se almacena en la Request
frutaRoutes.put("/:id", (req: Request, res: Response) => {
  const frutaId = req.params.id;

  const body = req.body;

  const fruta = {
    nombreFruta: body.nombreFruta,
    usuario: body.usuario,
    tipo: body.tipo,
    imagen: body.imagen,
  };

  Fruta.findByIdAndUpdate(frutaId, fruta).then((frutaDb) => {
    return res.json({
      ok: true,
      frutaDb,
    });
  });
});

frutaRoutes.delete("/", async (req: Request, res: Response) => {
  const frutaId = req.query.id;

  if (!frutaId) {
    return res.json({
      ok: false,
      msj: "Registro solicitado no existe",
    });
  }

  // const frutaDb = await Fruta.findById(frutaId);

  // if(!frutaDb){
  //     return res.json({
  //         ok: false,
  //         msj: 'Registro solicitado no existe'
  //     })
  // }

  Fruta.findByIdAndDelete(frutaId)
    .then((fruta) => {
      return res.json({
        ok: true,
        msj: "Eliminado correctamente",
      });
    })
    .catch((err) => {
      return res.json({
        ok: false,
        msj: "Registro solicitado no existe",
      });
    });
});

export default frutaRoutes;
