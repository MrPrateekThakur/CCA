// import { DataTypes } from "sequelize";
// import sequelize from "../Database/db.configue.js";
// import bcrypt from 'bcryptjs';

// const Organizer = sequelize.define('Organizers', {
//     organizer_id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true
//     }
//     , organizer_name: {
//         type: DataTypes.STRING,
//         allowNull: false
//     }
//     , email: {
//         type: DataTypes.STRING,
//         allowNull: false
//     }
//     , password: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         set(value) {
//             let saltKey = bcrypt.genSaltSync(10);
//             let encryptedPassword = bcrypt.hashSync(value, saltKey);
//             this.setDataValue('password', encryptedPassword);
//         }
//     }
//     , mobile: {
//         type: DataTypes.STRING({ length: 10 }),
//         allowNull: false
//     }
//     , isActive: {
//         type: DataTypes.BOOLEAN,
//         allowNull: false
//     }
// });

// sequelize.sync({ alter: true })
//     .then(res => {
//         console.log('Organizer table created successfully');
//     })
//     .catch(err => {
//         console.log('Something wrong in Organizer table');
//     })

// export default Organizer;
import { DataTypes } from "sequelize";
import sequelize from "../Database/db.configue.js";
import bcrypt from 'bcryptjs';
import Tournament from "./Tournament.modal.js"; // Import Tournament model

const Organizer = sequelize.define('Organizers', {
    organizer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    organizer_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            let saltKey = bcrypt.genSaltSync(10);
            let encryptedPassword = bcrypt.hashSync(value, saltKey);
            this.setDataValue('password', encryptedPassword);
        }
    },
    mobile: {
        type: DataTypes.STRING({ length: 10 }),
        allowNull: false
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    timestamps: false
});

// Define association between Organizer and Tournament
Organizer.hasMany(Tournament);
Tournament.belongsTo(Organizer);

sequelize.sync()
    .then(res => {
        console.log('Organizer table created successfully');
    })
    .catch(err => {
        console.log(err,'Something wrong in Organizer table');
    })

export default Organizer;
