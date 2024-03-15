import { Router } from "express";
import { crearColor, listarColores } from "../controllers/colores.controllers.js";

const enrutador = Router();

enrutador.route("/colores").get(listarColores).post(crearColor);

export default enrutador;