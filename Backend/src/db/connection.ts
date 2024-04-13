import { Sequelize } from "sequelize";

const sequelize = new Sequelize('Cafeteriaa', 'jose', '1234', {
  host: 'LAPTOP-DQRIJBVV',
  dialect: 'mssql', // El dialecto de SQL Server
  dialectOptions: {
    options: {
      encrypt: true, // Si estás usando una conexión encriptada
    }
  }
}); 

export default sequelize;

