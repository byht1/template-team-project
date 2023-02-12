const swagerToJSON = (tags = [], docs = [], schemasDocs = []) => {
  const { CURRENT_HOST, PORT = 5000 } = process.env;
  const paths = normalize(docs);
  const schemas = normalize(schemasDocs);

  return {
    openapi: "3.0.3",
    info: {
      title: "Petly",
      description: "Docs REST API",
      version: "0.0.1",
    },
    servers: [
      {
        url: `${
          CURRENT_HOST ? `http://localhost:${PORT}` : "ТУТ БУДЕ СЕРВЕР))"
        }`,
      },
    ],
    tags: [...tags],
    paths,
    components: {
      schemas,
    },
  };
};

function normalize(data) {
  let value = {};

  data.forEach((x) => {
    value = { ...value, ...x };
  });

  return value;
}

module.exports = swagerToJSON;
