import { DataTypes } from "sequelize";
import sequelize from "../Database/db.configue.js";
import Team from "./team.modal.js";
import Tournament from "./Tournament.modal.js";

let Payment = sequelize.define('payments', {
    payment_id: {
        type: DataTypes.INTEGER
        , allowNull: false
        , primaryKey: true
    }
    , paymentStatus: {
        type: DataTypes.BOOLEAN
        , defaultValue: false
    }
    , team_id: {
        type: DataTypes.INTEGER
        , allowNull: false
        , references: {
            model: Team, // References the Team model
            key: 'team_id' // References the primary key of Team
        }
    }
    , tournament_id: {
        type: DataTypes.INTEGER
        , allowNull: false
        , references: {
            model: Tournament, // References the Team model
            key: 'tournament_id' // References the primary key of Team
        }
    }
}, {
    timestamps: false
});

sequelize.sync()
    .then(() => {
        console.log('Payment table is created....');
    })
    .catch(err => {
        console.log(err, 'Something wrong in payment table....');
    });

export default Payment;