const Sequelize = require('sequelize');

const sequelize = new Sequelize('riviewapp', 'root', 'Vishalhere98@#', {
    host:"localhost",
    dialect: "mysql"
});

module.exports = sequelize;