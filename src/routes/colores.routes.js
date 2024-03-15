import { Router } from "express";
import { crearColor, listarColores, obtenerColor } from "../controllers/colores.controllers.js";

const enrutador = Router();

enrutador.route("/colores").get(listarColores).post(crearColor);
enrutador.route("/color/:id").get(obtenerColor);

export default enrutador;