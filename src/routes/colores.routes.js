import { Router } from "express";
import { borrarColor, crearColor, editarColor, listarColores, obtenerColor } from "../controllers/colores.controllers.js";

const enrutador = Router();

enrutador.route("/colores").get(listarColores).post(crearColor);
enrutador.route("/color/:id").get(obtenerColor).put(editarColor).delete(borrarColor);

export default enrutador;