import { Router } from "express";
import { getTagsByTipoTag } from "../controllers/tags.controllers.js";

const router = Router();
//API's para tags.
/**
 * 
*/
//Obtener todas las canciones
router.get('/tipo/', getTagsByTipoTag);

export default router;