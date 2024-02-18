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

export const createVideoGame= async (req:Request, res:Response): Promise<Response>=>{
    try {
        const {ID, Nombre, Descripcion, Fecha_de_lanzamiento, Rating, Plataformas}=req.body;
        const response: QueryResult= await pool.query(
            'INSERT INTO videogames (ID, Nombre, Descripcion, Fecha_de_lanzamiento, Rating, Plataformas)'+
            'VALUES ($1, $2, $3, $4, $5, $6)', [ID, Nombre, Descripcion, Fecha_de_lanzamiento, Rating, Plataformas ]);
        return res.status(200).json({ message: 'VideoGame created succesfully',
                body:{
                    videogame:{ ID, Nombre, Descripcion, Fecha_de_lanzamiento, Rating, Plataformas }
                }});
    } catch (error) {
        console.log(error);
        return res.status(200).json({message: "internal error"});
    }
}
export const updateVideoGame= async (req:Request, res:Response)=>{
    try {
        const id= req.params.id;
        const {Nombre, Descripcion, Fecha_de_lanzamiento, Rating, Plataformas}=req.body;
        await pool.query('UPDATE videogame SET Nombre = $1, Descripcion = $2, Fecha_de_lanzamiento = $3, Rating = $4, Plataformas=$5 WHERE ID= $6',[Nombre, Descripcion, Fecha_de_lanzamiento, Rating, Plataformas, id])
        return res.status(200).json({message: `Id: ${id} Videogame Update Successfully`})
    } catch (error) {
        console.log(error);
        return res.status(400).json({message: "internal error"})
    }
}
export const deleteVideoGame= async (req:Request, res:Response)=>{
    try {
        const id= req.params.id;
        await pool.query('DELETE FROM users WHERE id = $1',[id]);
        return res.status(200).json({message: `Id: ${id} Videogame delete succesfully`})
    } catch (error) {
        console.log(error);
        return res.status(400).json({message: "internal error"})
    }
}