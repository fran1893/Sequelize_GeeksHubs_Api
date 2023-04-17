const { Alumno, Nacionalidad, Direccion } = require("../models");
const { Op } = require("sequelize");
const { getPagesFromCountLimit, normalizePage } = require("../_util/util");
const {
  sendSuccsessResponse,
  sendErrorResponse,
} = require("../_util/sendResponse");

const alumnoController = {};
const LIMIT = 3;

/* obtener todos los alumnos */
alumnoController.getAll = async (req, res) => {
  let { page } = req.query;
  try {
    const count = await Alumno.count();
    const pages = getPagesFromCountLimit(count, LIMIT);
    page = normalizePage(page, pages);

    const alumnos = await Alumno.findAll({
      limit: LIMIT,
      offset: (page - 1) * LIMIT,
      attributes: {
        exclude: ["id_nacionalidad", "id_direccion", "createdAt", "updatedAt"],
      },

      include: [
        {
          model: Nacionalidad,
          as: "nacionalidad",
          attributes: ["id", "nombre_nacion"],
        },
        {
          model: Direccion,
          as: "direccion",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
    });

    sendSuccsessResponse(res, 200, {
      info: {
        total_results: count,
        limit_results: alumnos.length,
        page: page,
        total_pages: pages,
      },
      results: alumnos,
    });
  } catch (error) {
    sendErrorResponse(res, 500, "Error retreinving students", error);
    res.json(error);
  }
};

/* obtener alumno por id */
alumnoController.getById = async (req, res) => {
  const { id } = req.params;

  try {
    const alumno = await Alumno.findByPk(id, {
      attributes: {
        exclude: ["id_nacionalidad", "id_direccion", "createdAt", "updatedAt"],
      },

      include: [
        {
          model: Nacionalidad,
          as: "nacionalidad",
          attributes: ["id", "nombre_nacion"],
        },
        {
          model: Direccion,
          as: "direccion",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
    });

    if (alumno) sendSuccsessResponse(res, 200, alumno);
    else sendErrorResponse(res, 404, `Student '${id}' not found`);
  } catch (error) {
    sendErrorResponse(res, 500, "Error retreinving students", error);
  }
};

/* obtener alumno por nombre */
alumnoController.getByName = async (req, res) => {
  const { name } = req.params;

  try {
    const alumnos = await Alumno.findAll({
      where: {
        nombre: {
          [Op.like]: `%${name}%`,
        },
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    if (alumnos.length > 0) sendSuccsessResponse(res, 200, alumnos);
    else sendErrorResponse(res, 404, `Student '${name}' not found`);
  } catch (error) {
    sendErrorResponse(res, 500, `Error retreiving students`, error);
  }
};

/* crear alumno */
alumnoController.create = async (req, res) => {
  // const {
  //    nombre,
  //    apellidos,
  //    edad,
  //    fecha_nacimiento,
  //    activo,
  //    id_nacionalidad,
  //    id_direccion,
  // } = req.body;

  // verificar que id_nacionalidad es valido
  // verificar que id_direccion es valido

  const newAlumno = {
    ...req.body,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  try {
    await Alumno.create(newAlumno);
    sendSuccsessResponse(res, 201, "Stundent created succsessfully");
  } catch (error) {
    let code = error.name == "SequelizeValidationError" ? 400 : 500;
    sendErrorResponse(res, code, "Error creating student", error);
  }
};

/* borrar alumno por id */
alumnoController.deleteOne = async (req, res) => {
  const { id } = req.params;

  try {
    const num = await Alumno.destroy({
      where: { id: id },
    });

    if (num == 1)
      sendSuccsessResponse(res, 202, "Student deleted succsessfully");
    else
      sendErrorResponse(
        res,
        400,
        `Can not delete user '${id}'. Student not found`
      );
  } catch (error) {
    sendErrorResponse(res, 500, "Error deleting student", error);
  }
};

/* modificar alumno por id */
alumnoController.update = async (req, res) => {
  const { id } = req.params;

  const alumno = {
    ...req.body,
    updatedAt: new Date(),
  };

  try {
    const num = await Alumno.update(alumno, {
      where: { id: id },
    });

    if (num == 1)
      sendSuccsessResponse(res, 201, "Student updated succsessfully");
    else
      sendErrorResponse(
        res,
        400,
        `Can not update user '${id}'. Student not found`
      );
  } catch (error) {
    let code = error.name == "SequelizeValidationError" ? 400 : 500;
    sendErrorResponse(res, code, "Error updating student", error);
  }
};

module.exports = alumnoController;
