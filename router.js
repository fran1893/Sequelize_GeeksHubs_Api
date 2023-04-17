const express = require("express");
const router = express.Router();

const indexRouter = require("./routes/index");
const alumnosRouter = require("./routes/alumnos");
//const nacionalidadesRouter = require("./routes/nacionalidades");

/* home page */
router.use("/", indexRouter);

/* alumnos */
router.use("/api/alumnos", alumnosRouter);
// router.use("/api/nacionalidades", nacionalidadesRouter);
// router.use("/api/direcciones", direccionesRouter);
// router.use("/api/queseyo", queseyoRouter);

module.exports = router;
