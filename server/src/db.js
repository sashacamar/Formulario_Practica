const { Sequelize } = require('sequelize');
const FormModel = require("./models/Form");

require('dotenv').config();
const { DB_DEPLOY } = process.env;

const sequelize = new Sequelize(DB_DEPLOY, {
    logging: false, 
    native: false, 
});

FormModel(sequelize);

const { Form } = sequelize.models;

module.exports = { sequelize, ...sequelize.models };