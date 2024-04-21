import { Router } from "express";
import { filtrarCores, paletaAleatorio, paletaEscolhida } from "../Controller/page.js";

const paletasRoutes = Router();

paletasRoutes.get("/filtrarPorArea", paletaEscolhida);

paletasRoutes.get("/filtrarPorCor", filtrarCores);

paletasRoutes.get("/paletaAleatoria", paletaAleatorio);

export {paletasRoutes}

