import { pool } from "../db.js";
//Obtener canciones por tags.
export const getCancionesByTags = async (req, res) => {
    const tags = req.query.tags;
    if (!tags) {
        return res.status(400).json({ error: 'Tags parameter is required' });
    }
    const tagsArray = tags.split(',').map(tag => parseInt(tag, 10));
    try {
        const { rows } = await pool.query('SELECT * FROM sps_canciones_por_tags($1::int[])', [tagsArray]);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}