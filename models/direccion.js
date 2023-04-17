"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Direccion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      /* Direccion y Alumno (1:N) */
      Direccion.hasMany(models.Alumno, {
        foreignKey: "id_direccion", // foreignKey en modelo Alumno
      });
    }
  }
  Direccion.init(
    {
      calle: DataTypes.STRING,
      numero: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Direccion",
      tableName: "direcciones",
    }
  );
  return Direccion;
};
