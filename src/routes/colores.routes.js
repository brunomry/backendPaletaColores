import { Router } from "express";
import { listarColores } from "../controllers/colores.controllers.js";

const enrutador = Router();

enrutador.route("/colores").get(listarColores);

export default enrutador;