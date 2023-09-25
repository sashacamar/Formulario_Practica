require('dotenv').config();
const { Sequelize } = require('sequelize');
const FormModel = require("./models/Form");

const { DB_DEPLOY } = process.env;

const sequelize = new Sequelize(DB_DEPLOY, {
    logging: false, 
    native: false, 
});

FormModel(sequelize);

const { Form } = sequelize.models;

module.exports = { sequelize, ...sequelize.models };