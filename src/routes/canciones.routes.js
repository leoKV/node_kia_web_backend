import { Router } from "express";
import { pool } from "../db.js";

const router = Router();

//Lista de API's para canciones.

//Obtener todas las canciones
router.get('/cancion',(req,res) =>{
    res.send('Obteniendo canciones')
})


export default router;