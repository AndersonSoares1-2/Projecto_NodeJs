import app from "./src/app.js";
import conexao from "./infra/conexao.js";

const port = 8080;

conexao.connect(function (err) {
  if (err) {
    console.error("Conexão falhou: " + err.stack);
  } else {
    console.log("Conexão feita com sucesso!");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  }
});
