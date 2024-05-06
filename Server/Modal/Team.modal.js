import { DataTypes } from 'sequelize';
import sequelize from '../Database/db.configue.js';
import Player from './Player.modal.js';

const Team = sequelize.define('Teams', {
    team_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }
    , team_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
    , total_player: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
    , no_of_batsman: {
        type: DataTypes.INTEGER
        , allowNull: false
    }
    , no_of_bowler: {
        type: DataTypes.INTEGER
        , allowNull: false
    }
    , no_of_allrounder: {
        type: DataTypes.INTEGER
        , allowNull: false
    }
    , no_of_wicket_keeper: {
        type: DataTypes.INTEGER
        , allowNull: false
    }
    , captain_id: {
        type: DataTypes.INTEGER
        , references: {
            model: Player, // References the Team model
            key: 'player_id' // References the primary key of Team
        }
    }
    , thumbnail: DataTypes.STRING
    , isPlaying: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    timestamps: false
});

sequelize.sync()
    .then(res => {
        console.log('Team table created successfully');
    })
    .catch(err => {
        console.log(err, 'Something wrong in Team Table');
    });

export default Team;