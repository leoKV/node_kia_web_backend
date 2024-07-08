import { pool } from "../db.js";
import { Cancion } from "../models/cancion.model.js";
import { CancionDetail } from "../models/cancion-detail.model.js";
import { Parametro } from "../models/parametro.model.js";
//Lista de API'S
/********************************************/
//Obtener todas las canciones
export const getAllCanciones = async(req,res) =>{
    try{
        const {rows} = await pool.query('SELECT * FROM sps_canciones_all()');
        const mappedRows = rows.map(Cancion); // Mapear los datos
        res.json(mappedRows);
    }catch(error){
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
//Buscar canciones por nombre de artista o cancion.
export const getCancionesByNombre = async(req,res) =>{
    const nombre = req.query.nombre;
    if(!nombre){
        return res.status(400).json({ error: 'El nombre es requerido.' });
    }
    try{
        const {rows} = await pool.query('SELECT * FROM sps_cancion_artista($1)',[nombre]);
        if(rows.length === 0){
            return res.status(404).json({message: "Canción no encontrada."});
        }
        const mappedRows = rows.map(Cancion); // Mapear los datos
        res.json(mappedRows);
    }catch(error){
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
//Obtener el detalle de una canción.
export const getCancionDetailById = async(req,res) =>{
    const id = req.query.id;
    try{
        const {rows} = await pool.query('SELECT * FROM sps_cancion_detail($1)',[id]);
        if(rows.length === 0){
            return res.status(404).json({message: "Canción no encontrada."});
        }
        const mappedRow = CancionDetail(rows[0]);
        res.json(mappedRow);
    }catch(error){
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
//Obtener el estado de UrlDemo.
export const getUrlDemoState = async(req,res) =>{
    try{
        const {rows} = await pool.query('SELECT * FROM sps_url_demo_state()');
        const mappedRow = Parametro(rows[0]);// Mapear los datos
        res.json(mappedRow);
    }catch(error){
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
//Obtener el número de whatsapp para envio de pedidos.
export const getNumeroWhatsapp = async(req,res) =>{
    try{
        const {rows} = await pool.query('SELECT * FROM sps_numero_whatsapp()');
        const mappedRow = Parametro(rows[0]);// Mapear los datos
        res.json(mappedRow);
    }catch(error){
        res.status(500).json({ error: 'Internal Server Error' });
    }
};