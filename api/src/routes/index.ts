import { Router } from "express";
import { getVideogameById, getVideogames } from "../controllers/index.controllers";
const router= Router();

router.get('/videogames',getVideogames);
router.get('/videogames/:id',getVideogameById);
router.post('/videogames',getVideogames);
router.put('/videogames',getVideogames);
router.delete('/videogames',getVideogames);

export default router;