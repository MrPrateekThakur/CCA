import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('testPratispradha', 'root', 'root',
    {
        dialect: 'mysql',
        host: 'localhost'
    }
);

sequelize.authenticate()
    .then(() => {
        console.log('Database connected....');
    })
    .catch(err => {
        console.log(err);
    });

export default sequelize;