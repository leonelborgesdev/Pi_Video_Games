import { Pool } from "pg";

export const pool=new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'uajms',
    database: 'videogames',
    port: 5432
})