const app = require("./src/server");
const dbConnection = require("./src/config/dbConnection");

dbConnection()
  .then(() => {
    app.listen(3001, () => console.log("servidor en el puerto 3001"));
  })
  .catch((err) => console.log("Tenemos problemas con la conexion de la DB"));
