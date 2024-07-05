import { pool } from "../db.js";

//Obtener todas las canciones
export const getAllCanciones = async(req,res) =>{
    try{
        const {rows} = await pool.query('SELECT * FROM sps_canciones_all()');
        res.json(rows);
    }catch(error){
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
//Buscar canciones por nombre de artista o cancion.
export const getCancionesByNombre = async(req,res) =>{
    const {nombre} = req.params;
    try{
        const {rows} = await pool.query('SELECT * FROM sps_cancion_artista($1)',[nombre]);
        if(rows.length === 0){
            return res.status(404).json({message: "Canción no encontrada."});
        }
        res.json(rows);
    }catch(error){
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
//Obtener el detalle de una canción.
export const getCancionDetailById = async(req,res) =>{
    const {id} = req.params;
    try{
        const {rows} = await pool.query('SELECT * FROM sps_cancion_detail($1)',[id]);
        if(rows.length === 0){
            return res.status(404).json({message: "Canción no encontrada."});
        }
        res.json(rows[0]);
    }catch(error){
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
//Obtener el estado de UrlDemo.
export const getUrlDemoState = async(req,res) =>{
    try{
        const {rows} = await pool.query('SELECT * FROM sps_url_demo_state()');
        res.json(rows[0]);
    }catch(error){
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
//Obtener el número de whatsapp para envio de pedidos.
export const getNumeroWhatsapp = async(req,res) =>{
    try{
        const {rows} = await pool.query('SELECT * FROM sps_numero_whatsapp()');
        res.json(rows[0]);
    }catch(error){
        res.status(500).json({ error: 'Internal Server Error' });
    }
}