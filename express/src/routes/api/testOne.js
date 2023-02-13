// FIXME: delete
const express = require("express");
// FIXME: delete
const { swaggerConstructor } = require("../../helpers");
// FIXME: delete
const router = express.Router();
// FIXME: delete
swaggerConstructor.setTags({
  name: "test-1",
  description: "Operations about user",
});

// FIXME: delete
swaggerConstructor.setPaths({
  "/user/registration": {
    post: {
      tags: ["test-1"],
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
swaggerConstructor.setSchema({
  Id: {
    type: "string",
    example: "637216768f895fcabfd83e59",
  },
  User: {
    type: "object",
    properties: {
      name: {
        type: "string",
        example: "John",
      },
      email: {
        type: "string",
        example: "john@email.com",
      },
      password: {
        type: "string",
        example: "1234567",
      },
      phone: {
        type: "string",
        example: "+380999999999",
      },
      city: {
        type: "string",
        example: "Kyiv, Kyiv",
      },
    },
    xml: {
      name: "user",
    },
  },
  SuccessUser: {
    type: "object",
    properties: {
      _id: {
        $ref: "#/components/schemas/Id",
      },
      name: {
        type: "string",
        example: "John",
      },
      email: {
        type: "string",
        example: "john@email.com",
      },
      password: {
        type: "string",
        example: "1234567",
      },
      phone: {
        type: "string",
        example: "+380999999999",
      },
      city: {
        type: "string",
        example: "Kyiv, Kyiv",
      },
      favorite: {
        example: [],
      },
      pets: {
        example: [],
      },
      notices: {
        example: [],
      },
      birthday: {
        type: "string",
        example: "00.00.0000",
      },
      token: {
        type: "string",
        example:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzcxMWZiOTA3MDFjZDJlMjllZDJhOSIsImlhdCI6MTY2ODgwMDUwMSwiZXhwIjoxNjY4ODA0MTAxfQ.rJ5btUNE6jrb0XnMgKXGvoX4-RbfuD9ruoCLQAVIrl'",
      },
      image: {
        type: "string",
        example:
          "https://serhiibackend.s3.eu-central-1.amazonaws.com/upload/ef6ae7bf-ffd8-49f3-b202-5f792ad1841f-Default-avatar.jpg",
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
