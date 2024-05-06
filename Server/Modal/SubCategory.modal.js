import { DataTypes } from "sequelize";
import sequelize from "../Database/db.configue.js";

let SubCategory = sequelize.define('SubCategory', {
    subCategory_id: {
        type: DataTypes.INTEGER
        , primaryKey: true
        , allowNull: true
        , autoIncrement: true
    }
    , style: {
        type: DataTypes.STRING
        , allowNull: true
    }
}, {
    timestamps: false
});

sequelize.sync()
    .then(() => {
        console.log('SubCategory table is created....');
    })
    .catch(err => {
        console.log(err, 'Something wrong in SubCategory');
    });

export default SubCategory;