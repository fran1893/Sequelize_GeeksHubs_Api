const express = require("express");
const router = express.Router();
const nacionalidadController = require("../controllers/nacionalidadController");

// end-points nacionalidades

/* obtener todos los nacionalidades */
router.get("/", nacionalidadController.getAll);

/* obtener nacionalidad por id */
router.get("/:id", nacionalidadController.getById);

/* obtener nacionalidad por nombre */
router.get("/nacionalidad/:name", nacionalidadController.getByName);

/* crear nacionalidad */
router.post("/", nacionalidadController.create);

/* borrar nacionalidad por id */
router.delete("/:id", nacionalidadController.deleteOne);

/* modificar nacionalidad por id */
router.put("/:id", nacionalidadController.update);

module.exports = router;
