const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize(
//   process.env.MYSQL_DATABASE || config.development.database,
//   process.env.MYSQL_USER || config.development.username,
//   process.env.MYSQL_PASSWORD || config.development.password,
//   {
//     host: process.env.MYSQL_HOST || config.development.host,
//     port: process.env.MYSQL_PORT || config.development.port || 3306,
//     dialect: "mysql",
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000,
//     },
//   }
// );

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

module.exports = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to database has been established successfully");
  } catch (error) {
    console.error("Unable to connect to database: ", error);
  }
};
