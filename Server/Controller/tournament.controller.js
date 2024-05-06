import { response } from 'express';
import Tournament from '../Modal/Tournament.modal.js';
import Organizer from '../Modal/Organizer.modal.js';
import Team from '../Modal/Team.modal.js';
import TournamentTeam from '../Modal/TournamentTeam.modal.js';

// export const addTournament = (request, response, next) => {
// Tournament.create(request.body)
//     .then(result => {
//         console.log(result);
//         if (result)
//             return response.status(200).json({ Message: 'Tournament registered successfully' });
//         return response.status(201).json({ Message: 'Somthing wrong' });
//     })
//     .catch(error => {
//         console.log(error);
//         return response.status(500).json({ Error: 'Internal server error....' });
//     })
// } // ✔️

export const addTournament = async (request, response, next) => {

    try {
        for (let tournament of request.body)
            await Tournament.create(tournament);
        // if (result)
        return response.status(200).json({ Message: 'Tournament registered successfully' });
        // return response.status(201).json({ Message: 'Somthing wrong' });

    } catch (error) {
        console.log(error);
        return response.status(500).json({ Error: 'Internal server error....' });
    }
} // ✔️

export const viewAllTournament = async (request, response, next) => {
    try {
        let result = await Tournament.findAll();

        if (result)
            return response.status(200).json({ Message: 'All Tournament List', Tournaments: result });
        return response.status(201).json({ Message: 'No Tournament found' });

    } catch (error) {
        console.log(error);
        return response.status(500).json({ Error: "Internal server error..." });
    }
} // ✔️

export const particularTournament = (request, response, next) => {
    Tournament.findOne({
        include: [{ model: Organizer }]
    }
        , { where: request.body })
        .then(Data => {
            if (Data)
                return response.status(200).json({ Message: 'Tournament details', Data });
            return response.status(201).json({ Message: 'No record found' });
        })
        .catch(error => {
            console.log(error);
            return response.status(500).json({ Error: 'Interal server error' });
        })
} // ✔️

export const viewTournamentByOrganizer = () => {
    Tournament.findAll({ where: request.params })
        .then(result => {
            console.log(result);
            return response.status(200).json({ Message: 'Tournament details', Data: result });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Error: 'Internal Server Error' });
        });
} // ✔️

// export const register = async (request, response, next) => {
//     try {
//         const { tournament_id, captain_id } = request.body;

//         const team = await Team.findOne({ where: { captain_id } });
//         if (team.dataValues.isPlaying)
//             return response.status(205).json({ Message: 'Your are already registered' })

//         const { team_id } = team.dataValues;

//         await TournamentTeam.create({ tournament_id, team_id });
//         let result = await Team.update({ isPlaying: true }, { where: { team_id } });

//         console.log(result);
//         return response.status(200).json({ Message: 'Tournament registered successfully...' });
//     } catch (error) {

//         console.log(error);
//         return response.status(500).json({ Error: 'Internal server error...' });
//     }
// }

export const register = async (request, response, next) => {
    try {
        const { tournament_id, captain_id } = request.body;
        const team = await Team.findOne({ where: { captain_id } });

        if (!team)
            return response.status(404).json({ message: 'Team not found.' });

        if (team && team.isPlaying)
            return response.status(400).json({ message: 'You are already registered for a tournament.' });

        const { team_id } = team;

        await TournamentTeam.create({ tournament_id, team_id });
        await Team.update({ isPlaying: true }, { where: { team_id } });

        return response.status(200).json({ message: 'Tournament registered successfully.' });
    } catch (error) {
        console.error(error);
        if (error.original.errno === 1062)
            return response.status(505).json({ message: 'You are already registered' });

        return response.status(500).json({ error: 'Internal server error.' });
    }
}
