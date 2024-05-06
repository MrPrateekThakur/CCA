import { DataTypes } from 'sequelize';
import sequelize from '../Database/db.configue.js';

const Tournament = sequelize.define('Tournaments', {
    tournament_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
    , tournament_name: {
        type: DataTypes.STRING,
        allowNull: true
    }
    , banner: {
        type: DataTypes.STRING,
        allowNull: true
    }
    , tournament_team_limit: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
    , tournament_address: {
        type: DataTypes.STRING,
        allowNull: true
    }
    , tournament_apply_date: {
        type: DataTypes.DATE,
        allowNull: true
    }
    , tournament_start_date: {
        type: DataTypes.DATE,
        allowNull: true
    }
    , tournament_end_date: {
        type: DataTypes.DATE,
        allowNull: true
    }
    , tournament_fees: {
        type: DataTypes.DECIMAL,
        allowNull: true
    }
    , first_price: {
        type: DataTypes.DECIMAL,
        allowNull: true
    }
    , second_price: {
        type: DataTypes.DECIMAL,
        allowNull: true
    }
    , third_price: {
        type: DataTypes.DECIMAL,
        allowNull: true
    }
    , organizer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Organizers", // References the Organizer model
            key: 'organizer_id' // References the primary key of Organizer
        }
    }
}, {
    timestamps: false
});

// Sync the model
sequelize.sync()
    .then(res => {
        console.log('Tournament table created....');
    })
    .catch(err => {
        console.log(err, 'Something wrong in Tournament table....');
    });

export default Tournament;
