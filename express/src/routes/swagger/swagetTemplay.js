const express = require("express");

const swaggerUi = require("swagger-ui-express");
const { swaggerToJSON } = require("../../helpers");

const router = express.Router();

const testPach = {
  "/user/registration": {
    post: {
      tags: ["user"],
      summary: "Create user",
      description: "This can only be done by the logged in user.",
      operationId: "createUser",
      requestBody: {
        description: "Created user object",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/User",
            },
          },
        },
      },
      responses: {
        default: {
          description: "successful operation",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/SuccessUser",
              },
            },
          },
        },
      },
    },
  },
};

const testPach2 = {
  "/cities/search": {
    get: {
      tags: ["cities"],
      summary: "Find cities by name",
      operationId: "findCityByQuery",
      description: "Returns a map of cities codes to quantities",
      parameters: [
        {
          name: "q",
          in: "query",
          description: "q values that need to be considered for filter",
          required: false,
          explode: true,
          schema: {
            type: "string",
            default: "Kyi",
          },
        },
      ],
      responses: {
        200: {
          description: "successful operation",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/City",
                },
              },
            },
          },
        },
        400: {
          description: "error operation",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example:
                      "q length must be at least 3 characters long | q is required",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

const tegsTest = {
  name: "user",
  description: "Operations about user",
};

const tegsTest2 = {
  name: "cities",
  description: "Operations about city",
};

const schemasTest = {
  Token: {
    type: "string",
    example: 'Bearer "token"',
  },
};
const schemasTest2 = {
  Id: {
    type: "string",
    example: "637216768f895fcabfd83e59",
  },
};

const tags = [tegsTest, tegsTest2];
const paths = [testPach, testPach2];
const schemas = [schemasTest, schemasTest2];

router.use("/", swaggerUi.serve);
router.get("/", swaggerUi.setup(swaggerToJSON(tags, paths, schemas)));
