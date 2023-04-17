"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      /* Curso y Categoria (1:N) */
      Curso.belongsTo(models.Categoria, {
        foreignKey: "id_categoria", // foreignKey de Curso
      });

      /* Alumno y Curso (N:N) */
      Curso.belongsToMany(models.Alumno, {
        as: "alumnos",
        through: "cursos_alumnos", // a traves de
        foreignKey: "id_curso", // foreingKey en cursos_alumnos
      });
    }
  }
  Curso.init(
    {
      nombre_curso: DataTypes.STRING,
      id_categoria: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Curso",
      tableName: "cursos",
    }
  );
  return Curso;
};
