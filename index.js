const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const authenticateToken = require("./auth/authenticateToken");
const log = require("./lib/trace");
require("dotenv").config();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3100;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.DB_CONNECTION_STRING);

  console.log("Conectado a la base de datos");
}

app.use("/api/signup", require("./routes/signup"));
app.use("/api/login", require("./routes/login"));
app.use("/api/signout", require("./routes/logout"));
app.use("/api/registroEmpleado", require("./routes/registroEmpleado"));
app.use("/api/listadoEmpleado", require("./routes/listadoEmpleado"));
app.use("/api/horas", authenticateToken, require("./routes/seguimientos"));
app.use("/api/perfil", authenticateToken, require("./routes/perfil"));
//cuestionario
app.use("/api/cuestionarios", require("./routes/cuestionarios"));

app.use("/api/guardarRespuestas", require("./routes/guardarRespuestas"));

app.use("/api/resultados/", require("./routes/encuestasAplicadas"));
//Evaluacion
app.use("/api/evaluacion", authenticateToken, require("./routes/evaluacion"));

app.use("/api/taks", authenticateToken, require("./routes/tareas"));

// Ruta para renovar el token de acceso utilizando el token de actualización
app.use("/api/refresh-token", require("./routes/refreshToken"));

app.use("/api/posts", authenticateToken, require("./routes/posts"));
// Ruta protegida que requiere autenticació
app.use("/api/user", authenticateToken, require("./routes/user"));

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

module.exports = app;
