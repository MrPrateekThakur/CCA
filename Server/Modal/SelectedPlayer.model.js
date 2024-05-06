import { DataTypes } from "sequelize";
import sequelize from "../Database/db.configue.js";

let SelectedPlayer = sequelize.define("selectedPlayer", {
    selectedPlayer_id: {
        type: DataTypes.INTEGER
        , autoIncrement: true
        , primaryKey: true
        , allowNull: false
    }
}, {
    timestamps: false
});

sequelize.sync()
    .then(() => {
        console.log('SelectedPlayer table is created....');
    })
    .catch(err => {
        console.log(err, 'Something wrong SelectedPlayer table');
    })

export default SelectedPlayer;