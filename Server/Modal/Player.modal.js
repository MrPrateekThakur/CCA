import { DataTypes } from "sequelize";
import sequelize from "../Database/db.configue.js";
import bcrypt from 'bcryptjs';

let Player = sequelize.define('players', {
    player_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
    , email: {
        type: DataTypes.STRING,
        // allowNull: false
    }
    , mobile: {
        type: DataTypes.STRING(12),
        // allowNull: false
    }
    , password: {
        type: DataTypes.STRING,
        // allowNull: false,
        set(value) {
            let saltKey = bcrypt.genSaltSync(10);
            let encryptedPassword = bcrypt.hashSync(value, saltKey);
            this.setDataValue('password', encryptedPassword);
        }
    }
    , first_name: {
        type: DataTypes.STRING,
        // allowNull: false
    }
    , last_name: {
        type: DataTypes.STRING,
        // allowNull: false
    }
    , age: {
        type: DataTypes.STRING,
        // allowNull: false
    }
    , height: {
        type: DataTypes.STRING,
        // allowNull: false
    }
    , is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
    , address: {
        type: DataTypes.STRING,
        // allowNull: false
    }
    , gender: {
        type: DataTypes.STRING,
        // allowNull: false
    }
    , no_of_matches: DataTypes.STRING
    , image: DataTypes.STRING
    , description: DataTypes.STRING
    , subCategory_id: DataTypes.INTEGER
}, {
    timestamps: false
});

Player.checkPassword = (originalPassword, encryptedPassword) => {
    return bcrypt.compareSync(originalPassword, encryptedPassword);
}

sequelize.sync()
    .then(res => {
        console.log("Table created successfully");
    })
    .catch(err => {
        console.log(err, "Something went wrong in player model");
    });

export default Player;