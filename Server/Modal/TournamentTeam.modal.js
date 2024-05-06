import { DataTypes } from "sequelize";
import sequelize from "../Database/db.configue.js";
import Team from "./Team.modal.js";
import Tournament from "./Tournament.modal.js";

let TournamentTeam = sequelize.define('TournamentTeams', {
    tournamentTeam_id: {
        primaryKey: true
        , type: DataTypes.INTEGER
        , autoIncrement: true
        , allowNull: false
    }
    // , team_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     references: {
    //         model: Team,
    //         key: 'team_id'
    //     }
    // }
    // , tournament_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     references: {
    //         model: Tournament,
    //         key: 'tournament_id'
    //     }
    // }
}, {
    timestamps: false
});

sequelize.sync()
    .then(() => {
        console.log('Tournament Team is created.....');
    })
    .catch(err => {
        console.log(err, 'Something wrong in Tournament Team....');
    });

export default TournamentTeam;