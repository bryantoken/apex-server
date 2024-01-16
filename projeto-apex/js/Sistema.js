const { Data } = require('../js/Data.js');
const { Maquinas } = require('../js/models/Maquina.js');
const maquina = new Maquinas();
const dado = new Data();

dado.criarTabelas();
dado.inserirDados(maquina.nome_maquina, maquina.nome_usuario, maquina.processador, maquina.ram, maquina.armazenamento);

setTimeout(() => {
  console.log("Imprimindo");
  a.imprimir();
}, 1000);
