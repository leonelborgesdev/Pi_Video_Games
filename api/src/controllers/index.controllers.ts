import { Request, Response } from "express";
import { QueryResult } from "pg";
import { pool } from "../database";

export const getVideogames= async (req:Request, res:Response)=>{
    try {
        const response : QueryResult = await pool.query('SELECT *FROM videogames');
    return res.status(200).json(response.rows)
    } catch (e) {
        console.log(e);
        return res.status(500).json({message: "internal server error"});
    }
}

export const getVideogameById= async (req:Request, res:Response): Promise<Response>=>{
    try {
        const id = req.params.id;
        console.log(id)
        const response= await pool.query('SELECT * FROM videogames WHERE id = $1', [id])
        return res.status(200).json(response.rows)
    } catch (e) {
        console.log(e);
        return res.status(200).json({message: "internal error"});
    }
}

export const createVideoGame= async (req:Request, res:Response)=>{
    
}
export const updateVideoGame= async (req:Request, res:Response)=>{
    
}
export const deleteVidoGame= async (req:Request, res:Response)=>{
    
}