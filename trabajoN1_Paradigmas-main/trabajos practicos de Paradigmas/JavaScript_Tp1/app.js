// =======================
// Programa principal
// =======================
//Importamos desde la librería
const { input, close } = require("./lib/nodeImperativo");

// Función principal 
async function main() {

  const nombre = await input("¿Cuál es tu nombre? ");
  console.log("Hola", nombre, "¡Bienvenido a NodeImperativo.js!");

  const numero = await input("Ingrese su edad: ");
  console.log("Su edad es", numero);



  

  close(); // cerramos cuando ya no se necesita
}

// Ejecutar el programa
main();
