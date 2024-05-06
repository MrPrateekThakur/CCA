import express from 'express';
import {particular, registerTeam,  teamByTournamnet, viewAll, addTeam, updateTeam } from '../Controller/team.controller.js';

const   router = express.Router();

router.post('/add', addTeam);
router.post('/update', updateTeam);
router.get('/viewAll', viewAll);
router.post('/byTournament', teamByTournamnet);
router.post('/particular', particular);
// viewParticular
// router.post('/detail')
router.post('/register', registerTeam);

export default router;
// http://localhost:3000/team/particular