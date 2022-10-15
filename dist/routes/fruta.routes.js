"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fruta_model_1 = require("../models/fruta.model");
const frutaRoutes = (0, express_1.Router)();
frutaRoutes.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const frutas = yield fruta_model_1.Fruta.find();
    return res.json({
        ok: true,
        frutas,
    });
}));
frutaRoutes.get('/paging', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let perPage = 5;
    let page = Number(req.query.page) || 1;
    let skip = page - 1;
    skip = skip * perPage;
    const frutas = yield fruta_model_1.Fruta.find().skip(skip).limit(perPage);
    return res.json({
        ok: true,
        frutas
    });
}));
frutaRoutes.post("/", (req, res) => {
    const body = req.body;
    const fruta = {
        nombreFruta: body.nombreFruta,
        usuario: body.usuario,
        tipo: body.tipo,
        imagen: body.imagen,
    };
    fruta_model_1.Fruta.create(fruta)
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
frutaRoutes.put("/:id", (req, res) => {
    const frutaId = req.params.id;
    const body = req.body;
    const fruta = {
        nombreFruta: body.nombreFruta,
        usuario: body.usuario,
        tipo: body.tipo,
        imagen: body.imagen,
    };
    fruta_model_1.Fruta.findByIdAndUpdate(frutaId, fruta).then((frutaDb) => {
        return res.json({
            ok: true,
            frutaDb,
        });
    });
});
frutaRoutes.delete("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
    fruta_model_1.Fruta.findByIdAndDelete(frutaId)
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
}));
exports.default = frutaRoutes;
