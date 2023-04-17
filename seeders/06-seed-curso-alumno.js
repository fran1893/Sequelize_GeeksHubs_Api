"use strict";
const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "cursos_alumnos",
      [
        {
          id_curso: 1,
          id_alumno: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_curso: 1,
          id_alumno: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_curso: 1,
          id_alumno: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_curso: 2,
          id_alumno: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_curso: 2,
          id_alumno: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_curso: 2,
          id_alumno: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_curso: 3,
          id_alumno: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_curso: 4,
          id_alumno: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_curso: 4,
          id_alumno: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_curso: 5,
          id_alumno: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_curso: 5,
          id_alumno: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_curso: 5,
          id_alumno: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("cursos_alumnos", {
      [Op.or]: [
        { id_curso: 1, id_alumno: 1 },
        { id_curso: 1, id_alumno: 2 },
        { id_curso: 1, id_alumno: 3 },
        { id_curso: 2, id_alumno: 1 },
        { id_curso: 2, id_alumno: 2 },
        { id_curso: 2, id_alumno: 3 },
        { id_curso: 3, id_alumno: 6 },
        { id_curso: 4, id_alumno: 1 },
        { id_curso: 4, id_alumno: 2 },
        { id_curso: 5, id_alumno: 1 },
        { id_curso: 5, id_alumno: 2 },
        { id_curso: 5, id_alumno: 3 },
      ],
    });
  },
};
