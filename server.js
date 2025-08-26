const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

// Rotas principais
app.get("/", (req, res) => res.render("login"));
app.get("/dashboard", (req, res) => res.render("dashboard"));
app.get("/cadastro", (req, res) => res.render("cadastro"));
app.get("/laudos", (req, res) => res.render("laudos"));
app.get("/assinaturas", (req, res) => res.render("assinaturas"));
app.get("/pessoal", (req, res) => res.render("pessoal"));

app.listen(3000, () => console.log("IntegriRH rodando em http://localhost:3000"));
