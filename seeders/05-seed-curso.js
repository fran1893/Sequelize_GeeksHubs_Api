"use strict";
const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "cursos",
      [
        {
          nombre_curso: "HTML",
          id_categoria: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre_curso: "CSS",
          id_categoria: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre_curso: "JavaScript",
          id_categoria: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre_curso: "SQL",
          id_categoria: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre_curso: "Express",
          id_categoria: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre_curso: "NodeJs",
          id_categoria: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("cursos", {
      [Op.or]: [
        { nombre_curso: "HTML" },
        { nombre_curso: "CSS" },
        { nombre_curso: "JavaScript" },
        { nombre_curso: "SQL" },
        { nombre_curso: "Express" },
        { nombre_curso: "NodeJs" },
      ],
    });
  },
};
