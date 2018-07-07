import * as Sequelize from 'sequelize';
const sequelize = new Sequelize('askversed', 'softwarebros', 'askversed', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

sequelize.authenticate()
.then(() => console.log("connection successful"))
.catch(() => console.log("failed to connect"));

const Parent = sequelize.define('parent', {


});

const College = sequelize.define('college', {

});

const 
