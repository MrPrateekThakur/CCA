import express from 'express';
import { viewTournamentByOrganizer, register, addTournament, viewAllTournament, particularTournament } from '../Controller/Tournament.controller.js';
// import { verifyOrganizer } from '../Token/verifyToken.js';
import { body } from 'express-validator';

const router = express.Router();

router.post('/addTournament', addTournament);
router.post('/registerTeam', register);
router.get('/viewAllTournament', viewAllTournament);
router.post('/viewParticular', particularTournament);
router.get('/viewTournamentByOrganizer/:organizer_id',
    body(`organizer_id`).isEmpty(),
    viewTournamentByOrganizer);
// update

export default router;
