import { Router } from "express";
import { createVideoGame, getVideogameById, getVideogames } from "../controllers/index.controllers";
const router= Router();

router.get('/videogames',getVideogames);
router.get('/videogames/:id',getVideogameById);
router.post('/videogames',createVideoGame);
router.put('/videogames',getVideogames);
router.delete('/videogames',getVideogames);

export default router;