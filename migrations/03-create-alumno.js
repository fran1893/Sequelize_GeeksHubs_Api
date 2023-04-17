"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("alumnos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nombre: {
        type: Sequelize.STRING,
      },
      apellidos: {
        type: Sequelize.STRING,
      },
      edad: {
        type: Sequelize.INTEGER,
      },
      fecha_nacimiento: {
        type: Sequelize.DATE,
      },
      activo: {
        type: Sequelize.ENUM("si", "no"),
      },
      id_nacionalidad: {
        type: Sequelize.INTEGER,
        references: {
          model: "nacionalidades",
          key: "id",
        },
      },
      id_direccion: {
        type: Sequelize.INTEGER,
        references: {
          model: "direcciones",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("alumnos");
  },
};
