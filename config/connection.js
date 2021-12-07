const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
      dialectOptions: {
        decimalNumbers: true,
      }
});

//verify connection to the database
  sequelize.authenticate().then(() => {
    console.log('database connected!');
  }).catch((err) => {
    console.log('connection failed to database', err);
  });
  

module.exports = sequelize;
