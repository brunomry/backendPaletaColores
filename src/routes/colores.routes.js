import { Router } from "express";
import { crearColor, editarColor, listarColores, obtenerColor } from "../controllers/colores.controllers.js";

const enrutador = Router();

enrutador.route("/colores").get(listarColores).post(crearColor);
enrutador.route("/color/:id").get(obtenerColor).put(editarColor);

export default enrutador;