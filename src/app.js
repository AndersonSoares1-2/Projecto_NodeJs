import express from "express";
const app = express();
app.use(express.json());

const cores = [
  { id: 1, name: "Branca" },
  { id: 2, name: "Verde" },
  { id: 3, name: "Azul" },
];

function buscarCorPeloId(id) {
  const cor = cores.filter((cor) => cor.id == id);
  return cor;
}

function buscarIndexCor(id) {
  const cor = cores.findIndex((cor) => cor.id == id);
  return cor;
}
app.get("/", (req, res) => {
  res.send("Cores em API Rest!");
});

app.get("/cores", (req, res) => {
  res.send(cores);
});

app.get("/cores/:id", (req, res) => {
  res.json(buscarCorPeloId(req.params.id));
});

app.post("/cores", (req, res) => {
  cores.push(req.body);
  res.status(201).send("Cor adicionada com sucesso!");
});

app.delete("/cores/:id", (req, res) => {
  cores.splice(buscarIndexCor(req.params.id), 1);
  res.send("Elemento eliminado com sucesso!");
});

app.put("/cores/:id", (req, res) => {
  cores[buscarIndexCor(req.params.id)] = req.body;
  res.send("Elemento atualizado com sucesso!");
});

export default app;
