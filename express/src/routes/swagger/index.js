const express = require("express");
const { swaggerConstructor } = require("../../helpers");

const swaggerUi = require("swagger-ui-express");
// const swaggerToJSON = require("../../helpers/swaggerToJSON");

const router = express.Router();

// const tags = [];
// const paths = [];
// const schemas = [];

router.use("/", swaggerUi.serve);
router.get("/", swaggerUi.setup(swaggerConstructor.swaggerBuild()));

module.exports = router;
