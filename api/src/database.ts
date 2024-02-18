require("dotenv").config();
import { Pool } from "pg";
const { DB_USER, DB_PASSWORD, DB_HOST} = process.env;

export const pool=new Pool({
    user: DB_USER,
    host: DB_HOST,
    password: DB_PASSWORD,
    database: 'videogames',
    port: 5432
})