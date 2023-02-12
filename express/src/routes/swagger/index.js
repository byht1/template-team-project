const express = require("express");

const swaggerUi = require("swagger-ui-express");
const swagerToJSON = require("../../helpers/swagerToJSON");

const router = express.Router();

const tags = [];
const paths = [];
const schemas = [];

router.use("/", swaggerUi.serve);
router.get("/", swaggerUi.setup(swagerToJSON(tags, paths, schemas)));

module.exports = router;
