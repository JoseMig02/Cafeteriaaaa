"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('Cafeteriaa', 'jose', '1234', {
    host: 'LAPTOP-DQRIJBVV',
    dialect: 'mssql', // El dialecto de SQL Server
    dialectOptions: {
        options: {
            encrypt: true, // Si estás usando una conexión encriptada
        }
    }
});
exports.default = sequelize;
