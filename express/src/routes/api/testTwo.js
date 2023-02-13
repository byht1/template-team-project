// FIXME: delete
const express = require("express");
// FIXME: delete
const { swaggerConstructor } = require("../../helpers");

// FIXME: delete
const router = express.Router();

// FIXME: delete
swaggerConstructor.setTags({
  name: "test-2",
  description: "Operations about user",
});

// FIXME: delete
swaggerConstructor.setPaths({
  "/user/registration2": {
    post: {
      tags: ["test-2"],
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
});

// FIXME: delete
router.get("/logout", async (req, res) => {
  res.json({
    path: "/logout",
    message: "ese",
  });
});

// FIXME: delete
router.get("/current", async (req, res) => {
  res.json({
    path: "/current",
    message: "ese",
  });
});

// FIXME: delete
module.exports = router;
