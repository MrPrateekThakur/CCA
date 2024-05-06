import { DataTypes } from "sequelize";
import sequelize from "../Database/db.configue.js";
// import Player from "./Player.modal.js";
// import Team from "./Team.modal.js";

let TeamDetail = sequelize.define('TeamDetails', {
    teamDetail_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
    // , is_captain: {
    //     type: DataTypes.BOOLEAN,
    //     allowNull: false,
    //     defaultValue: false
    // }
    // , player_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     references: {
    //         model: Player, // References the Player model
    //         key: 'player_id' // References the primary key of Player
    //     }
    // }
    // , team_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     references: {
    //         model: Team, // References the Team model
    //         key: 'team_id' // References the primary key of Team
    //     }
    // }
}, {
    timestamps: false
});

sequelize.sync()
    .then(() => {
        console.log('TeamDetail table is created....');
    })
    .catch(err => {
        console.log(err, 'Something wrong in TeamDetail table....');
    });

export default TeamDetail;