import pg from 'pg';

//Conexión con base de datos.
export const pool = new pg.Pool({
    host:"localhost",
    user:"postgres",
    password:"gismo",
    database:"db_kia",
    port:"5432",
})