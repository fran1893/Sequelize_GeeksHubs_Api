"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      /* Categoria y Curso (1:N) */
      Categoria.hasMany(models.Curso, {
        foreignKey: "id_categoria", // foreignKey en modelo Curso
      });
    }
  }
  Categoria.init(
    {
      nombre_categoria: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Categoria",
      tableName: "categorias",
    }
  );
  return Categoria;
};
