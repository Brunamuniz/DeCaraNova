import { Router } from "express";
import { paletasRoutes } from "./paletas.routes.js";

const router = Router ();

router.use("/Color", paletasRoutes);

export {router};