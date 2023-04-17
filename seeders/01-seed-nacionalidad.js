"use strict";
const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "nacionalidades",
      [
        {
          nombre_nacion: "Española",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre_nacion: "Mexicana",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre_nacion: "Colombiana",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre_nacion: "Argentina",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre_nacion: "Ecuatoriana",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre_nacion: "Venezolana",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre_nacion: "Uruguaya",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre_nacion: "Italiana",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre_nacion: "Rusa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre_nacion: "Cubana",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("nacionalidades", {
      [Op.or]: [
        { nombre_nacion: "Española" },
        { nombre_nacion: "Mexicana" },
        { nombre_nacion: "Colombiana" },
        { nombre_nacion: "Argentina" },
        { nombre_nacion: "Ecuatoriana" },
        { nombre_nacion: "Venezolana" },
        { nombre_nacion: "Uruguaya" },
        { nombre_nacion: "Italiana" },
        { nombre_nacion: "Rusa" },
        { nombre_nacion: "Cubana" },
      ],
    });
  },
};
