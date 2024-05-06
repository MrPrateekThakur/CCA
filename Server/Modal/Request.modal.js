import { DataTypes } from "sequelize";
import sequelize from "../Database/db.configue.js";
// import Team from "./Team.modal.js";
// import Player from "./Player.modal.js";
// import Tournament from "./Tournament.modal.js";

let Request = sequelize.define('Requests', {
    Request_id: {
        type: DataTypes.INTEGER
        , allowNull: false
        , primaryKey: true
        , autoIncrement: true
    }
    // , team_id: {
    //     type: DataTypes.INTEGER
    //     , allowNull: false
    // , references: {
    //     model: "teams", // References the Player model
    //     key: 'team_id' // References the primary key of Player
    // }
    // }
    // , player_id: {
    //     type: DataTypes.INTEGER
    //     , allowNull: false
    // , references: {
    //     model: "players", // References the Player model
    //     key: 'player_id' // References the primary key of Player
    // }
    // }
    // , tournament_id: {
    //     type: DataTypes.INTEGER
    //     , allowNull: false
    // , references: {
    //     model: Tournament, // References the Tournament model
    //     key: 'tournament_id' // References the primary key of Tournament
    // }
    // }
}, {
    timestamps: false
});

sequelize.sync()
    .then(() => {
        console.log('Request table created....');
    })
    .catch(err => {
        console.log(err, 'Error in Request table....');
    });

export default Request;