const express = require("express");
const router = express.Router();
const alumnoController = require("../controllers/alumnoController");

// end-points alumnos

/* obtener todos los alumnos */
router.get("/", alumnoController.getAll);

/* obtener alumno por id */
router.get("/:id", alumnoController.getById);

/* obtener alumno por nombre */
router.get("/nombre/:name", alumnoController.getByName);

/* crear alumno */
router.post("/", alumnoController.create);

/* borrar alumno por id */
router.delete("/:id", alumnoController.deleteOne);

/* modificar alumno por id */
router.put("/:id", alumnoController.update);

module.exports = router;
