// =======================
// Librería NodeImperativo
// =======================

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función auxiliar estilo "scanf"
function input(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

// Función para cerrar la consola (similar a liberar recursos)
function close() {
  rl.close();
}

// Exportamos solo utilidades, NO el main
module.exports = {
  input,
  close
};
