"use strict";
const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "direcciones",
      [
        {
          calle: "Calle del río",
          numero: 42,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          calle: "La carrera",
          numero: 81,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          calle: "Plaza Garibaldi",
          numero: 45,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          calle: "Avenida Avear",
          numero: 33,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          calle: "Avenida Boyacá",
          numero: 64,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("direcciones", {
      [Op.or]: [
        { calle: "Calle del río" },
        { calle: "La carrera" },
        { calle: "Plaza Garibaldi" },
        { calle: "Avenida Avear" },
        { calle: "Avenida Boyacá" },
      ],
    });
  },
};
