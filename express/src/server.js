const mongoose = require("mongoose");

const app = require("./app");

const { DB_HOST, PORT = 5000 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`server start http://localhost:${PORT}/docs`)
    )
  )
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
