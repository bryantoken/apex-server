const sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database(
  "./db/apex.db",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Conectado");
  }
);
const impressao = `SELECT * FROM maquinas`;

class Data {
  criarTabelas() {
    db.run(
      `CREATE TABLE IF NOT EXISTS 
    maquinas(
        id INTEGER PRIMARY KEY AUTOINCREMENT ,
        nome_maquina TEXT NOT NULL,
        nome_usuario TEXT, 
        processador TEXT NOT NULL, 
        ram INTEGER NOT NULL, 
        tipo_armazenamento TEXT NOT NULL
        )`
    );
  }
  inserirDados(nome_maquina, nome_usuario, processador, ram, armazenamento) {
    db.run(`INSERT INTO 
maquinas(
    nome_maquina, 
    nome_usuario, 
    processador, 
    ram, 
    tipo_armazenamento
    ) 
    VALUES (
        '${nome_maquina}',
        '${nome_usuario}',
        '${processador}',
        '${ram}',
        '${armazenamento}'
        )`);
  }
  imprimir() {
    db.all(impressao, [], (err, rows) => {
      if (err) return console.error(err.message);

      rows.forEach((row) => {
        console.log(row);
      });
    });
  }
}
module.exports = { Data };