import { DataTypes } from "sequelize";
import sequelize from "../Database/db.configue.js";
import bcrypt from "bcryptjs";

const Admin = sequelize.define('Admins', {
    admin_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    }
    , email: {
        type: DataTypes.STRING,
        allowNull: false
    }
    , password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            let saltKey = bcrypt.genSaltSync(10);
            let encryptedPassword = bcrypt.hashSync(value, saltKey);
            this.setDataValue('password', encryptedPassword);
        }
    }
});

Admin.checkPassword = (originalPassword, encryptedPassword) => {
    return bcrypt.compareSync(originalPassword, encryptedPassword);
}

sequelize.sync()
    .then((res) => {
        console.log('Admin Table created successfully');
    })
    .catch(err => {
        console.log(err, 'Something wrong in Admin table');
    });

export default Admin;

// admin modal