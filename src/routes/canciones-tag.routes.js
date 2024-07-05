import { Router } from "express";
import { getCancionesByTags } from "../controllers/canciones-tag.controllers.js";

const router = Router();
//API's para canciones-tags.
/**
 * 
*/
// Obtener canciones por tags
router.get('/',getCancionesByTags);


export default router;