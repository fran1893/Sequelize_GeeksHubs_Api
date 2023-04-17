"use strict";
const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "categorias",
      [
        {
          nombre_categoria: "Frontend",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre_categoria: "Backend",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categorias", {
      [Op.or]: [
        { nombre_categoria: "Frontend" },
        { nombre_categoria: "Backend" },
      ],
    });
  },
};
