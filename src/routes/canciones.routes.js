import { Router } from "express";
import { getAllCanciones, getCancionDetailById, getCancionesByNombre, getNumeroWhatsapp, getUrlDemoState } from "../controllers/canciones.controllers.js";

const router = Router();
//API's para canciones.
/**
 * 
*/
//Obtener todas las canciones
router.get('/',getAllCanciones);
//Buscar canciones por nombre de artista o cancion.
router.get('/buscar/',getCancionesByNombre);
//Obtener el detalle de una canción.
router.get('/detalle/',getCancionDetailById );
//Obtener el estado de UrlDemo.
router.get('/urlDemo/',getUrlDemoState);
//Obtener el número de whatsapp para envio de pedidos.
router.get('/whatsapp/',getNumeroWhatsapp);

export default router;