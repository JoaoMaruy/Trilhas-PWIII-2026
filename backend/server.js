const express = require("express");
const cors = require("cors");
const loginRoutes = require("./src/routes/loginRoutes");

const app = express();
const PORT = 3000;

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/login", loginRoutes);

app.listen(3000, () => {
   console.log("Servidor rodando na porta 3000");
})
