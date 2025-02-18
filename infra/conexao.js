import mysql from "mysql";

const conexao = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});

export default conexao;
