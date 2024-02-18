import { Request, Response } from "express";

export const getVideogames= (req:Request, res:Response)=>{
    res.send('videogames')
}

