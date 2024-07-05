import { pool } from "../db.js";
//Obtener tags por tipo de tag.
export const getTagsByTipoTag = async(req,res) =>{
    try{
        const {rows} = await pool.query('SELECT * FROM sps_tag_info()');
        res.json(rows);
    }catch(error){
        res.status(500).json({ error: 'Internal Server Error' });
    }
}