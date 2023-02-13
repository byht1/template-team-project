const { CURRENT_HOST, PORT = 5000 } = process.env;

const initialSwaggerParams = {
  openapi: "3.0.3",
  info: {
    title: "Petly",
    description: "Docs REST API",
    version: "0.0.1",
  },
  servers: [
    {
      // FIXME: дописати сервер
      url: `${CURRENT_HOST ? `http://localhost:${PORT}` : "ТУТ БУДЕ СЕРВЕР))"}`,
    },
  ],
  tags: [],
  paths: {},
  components: {
    schemas: {},
  },
};

class SwaggerGenerator {
  #swaggerSetting;
  #tags;
  #paths;
  #schemas;

  constructor(initial) {
    this.#swaggerSetting = initial;
    this.#tags = [];
    this.#paths = {};
    this.#schemas = {};
  }

  setTags = (tag) => {
    this.#tags.push(tag);
  };

  setPaths = (path) => {
    this.#paths = { ...this.#paths, ...path };
  };

  setSchema = (schema) => {
    this.#schemas = { ...this.#schemas, ...schema };
  };

  swaggerBuild = () => {
    return {
      ...this.#swaggerSetting,
      tags: this.#tags,
      paths: this.#paths,
      components: { schemas: this.#schemas },
    };
  };
}

const swaggerConstructor = new SwaggerGenerator(initialSwaggerParams);

module.exports = swaggerConstructor;

// TODO: на вибір
// const swaggerToJSON = (tags = [], docs = [], schemasDocs = []) => {
//
//   const paths = normalize(docs);
//   const schemas = normalize(schemasDocs);

// return {
//   openapi: "3.0.3",
//   info: {
//     title: "Petly",
//     description: "Docs REST API",
//     version: "0.0.1",
//   },
//   servers: [
//     {
//       url: `${
//         CURRENT_HOST ? `http://localhost:${PORT}` : "ТУТ БУДЕ СЕРВЕР))"
//       }`,
//     },
//   ],
//   tags: [...tags],
//   paths,
//   components: {
//     schemas,
//   },
// };
// };

// function normalize(data) {
//   let value = {};

//   data.forEach((x) => {
//     value = { ...value, ...x };
//   });

//   return value;
// }

// module.exports = swaggerToJSON;
