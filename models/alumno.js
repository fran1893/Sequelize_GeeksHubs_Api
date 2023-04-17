"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Alumno extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      /* Alumno y Nacionalidad (1:N) */
      Alumno.belongsTo(models.Nacionalidad, {
        as: "nacionalidad",
        foreignKey: "id_nacionalidad", // foreignKey de Alumno
      });

      /* Alumno y Direccion (1:N) */
      Alumno.belongsTo(models.Direccion, {
        as: "direccion",
        foreignKey: "id_direccion", // foreignKey de Alumno
      });

      /* Alumno y Curso (N:N) */
      Alumno.belongsToMany(models.Curso, {
        as: "cursos",
        through: "cursos_alumnos", // a traves de
        foreignKey: "id_alumno", // foreingKey en cursos_alumnos
      });
    }
  }
  Alumno.init(
    {
      nombre: {
        type: DataTypes.STRING,
        validate: {
          is: /^[a-zA-Z]+(([',.-][a-zA-Z ])?[a-zA-Z]*)*$/,
        },
      },
      apellidos: {
        type: DataTypes.STRING,
        validate: {
          is: /^[a-zA-Z]+(([',.-][a-zA-Z ])?[a-zA-Z]*)*$/,
        },
      },
      edad: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: {
            msg: "Debe ser un número entero",
          },
          min: {
            msg: "La edad debe ser mayor que 1",
            args: 1,
          },
          max: 200,
        },
      },
      fecha_nacimiento: {
        type: DataTypes.DATE,
        validate: {
          isDate: true,
          isAfter: "1900-01-01",
        },
      },
      activo: DataTypes.ENUM("si", "no"),
      id_nacionalidad: DataTypes.INTEGER,
      id_direccion: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Alumno",
      tableName: "alumnos",
    }
  );
  return Alumno;
};
