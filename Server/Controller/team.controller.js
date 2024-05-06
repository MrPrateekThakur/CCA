import Player from '../Modal/Player.modal.js';
import Team from '../Modal/Team.modal.js';
import TeamDetail from '../Modal/TeamDetail.modal.js';
import TournamentTeam from '../Modal/TournamentTeam.modal.js';

export const addTeam = async (request, response, next) => {
    // try {
    //     let result = Team.create(request.body); // { team_name, total_player, contact }
    //     if (result.affectedRows)
    //         return response.status(200).json({ Message: 'Team created successfully....' });
    //     return response.status(201).json({ Message: 'Something went wrong....' });

    try {
        for (let team of request.body)
            Team.create(team); // { team_name, total_player, contact }
        // if (result.affectedRows)
        return response.status(200).json({ Message: 'Team created successfully....' });
        // return response.status(201).json({ Message: 'Something went wrong....' });

    } catch (error) {
        console.log(error);
        return response.status(500).json({ Error: 'Internal server error....' });
    }
}

export const updateTeam = (request, response, next) => {
    Team.update(request.body, {
        where: { team_id: request.bosy.team_id }
    })
        .then(request => {
            console.log(request);
            return response.status(200).json({ Message: 'Team details updated' });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Error: 'Internal Server error' });
        });
}

// export const viewAll = () => {
//     Team.findAll()
//         .then(result => {
//             return response.status(200).json({ Message: 'All teams data', data: result });
//         })
//         .catch(err => {
//             console.log(err);
//             return response.status(500).json({ Error: 'Internal server error' });
//         });
// }

export const viewAll = (request, response) => {
    Team.findAll()
        .then(result => {
            return response.status(200).json({ Message: 'All teams data', data: result });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Error: 'Internal server error' });
        });
}

export const teamByTournamnet = (request, response) => {
    let { tournament_id } = request.body;

    TournamentTeam.findAll({
        where: { tournament_id },
        include: Team
    })
        .then(result => {
            console.log(result);
            return response.status(200).json({ Message: 'All teams by tournament', data: result });
        })
        .catch(error => {
            console.log(error);
            return response.status(500).json({ Error: 'internal server error' });
        });
}

export const registerTeam = (request, response) => {
    Team.create(request.body)
        .then(result => {
            return response.status(200).json({ Message: 'Team registerd successfully', data: result });
        })
        .catch(error => {
            console.log(error);
            return response.status(500).json({ Error: 'Internal server error' });
        })
}

export const particular = async (request, response, next) => {
    // try {
    //     // let { team_id } = request.params;
    //     let team = await Team.findAll({ where: { team_id: request.params.team_id * 1 }, include: Player })

    //     return response.status(200).json({ Message: 'Team details', team });
    // } catch (error) {

    //     console.log(error);
    //     return response.status(500).json({ Error: 'Internal server error...' });
    // }
    // try {
    // let team = await Team.findOne({
    //     where: { team_id: request.params.team_id * 1 },
    //     include: Player
    // });

    // if (team.length > 0)
    //     return response.status(200).json({ Message: 'Team details', Data: team });
    // else
    //     return response.status(404).json({ Message: 'No team found with the given ID' });

    //     let teamDetail = await TeamDetail.findOne({
    //         where: { team_id: request.params.team_id }
    //         ,{ include: Team }, { include: Player }});
    // console.log(teamDetail);

    // } catch (error) {
    //     console.error(error);
    //     return response.status(500).json({ Error: 'Internal server error' });
    // }
    // }

    console.log(request.body);
    try {
        let teamDetail = await TeamDetail.findOne({
            where: { team_id: request.body.team_id * 1 },
            include: [
                { model: Team },
                { model: Player }
            ]
        });
        console.log(teamDetail);
        if (teamDetail) {
            return response.status(200).json({ Message: 'Team detail', Data: teamDetail });
        } else {
            return response.status(404).json({ Message: 'No team detail found for the given ID' });
        }
    } catch (error) {
        console.error(error);
        return response.status(500).json({ Error: 'Internal server error' });
    }
}