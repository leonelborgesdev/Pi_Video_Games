import { Router } from "express";
import { createVideoGame, deleteVideoGame, getVideogameById, getVideogames, updateVideoGame } from "../controllers/index.controllers";
const router= Router();

router.get('/videogames',getVideogames);
router.get('/videogames/:id',getVideogameById);
router.post('/videogames',createVideoGame);
router.put('/videogames/:id',updateVideoGame);
router.delete('/videogames/:id',deleteVideoGame);

export default router;