import sequelize from "../Database/db.configue.js";
import { DataTypes } from "sequelize";

const Category = sequelize.define("categories", {
    category_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

sequelize.sync()
    .then(() => {
        console.log("Category table is created");
    }).catch(err => {
        console.log(err, "Something wrong in category table ");
    });

export default Category;