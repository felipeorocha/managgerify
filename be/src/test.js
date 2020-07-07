const Sequelize = require('sequelize');
const dabaseConfigs = require('../config/database');

const sequelize = new Sequelize(dabaseConfigs);

const connect = sequelize.authenticate();
connect
  .then(() => console.log('Successfully connected'))
  .catch(err => console.log(`Connection refused... ${err}`));
