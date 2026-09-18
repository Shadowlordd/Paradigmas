const prompt = require("prompt-sync")({ sigint: true });

function calculadora(num1, num2, opcion) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    let operacionSimbolo;

    switch (opcion) {
        case '1': 
            operacionSimbolo = '+';
            return { resultado: num1 + num2, simbolo: operacionSimbolo };
        case '2': 
            operacionSimbolo = '-';
            return { resultado: num1 - num2, simbolo: operacionSimbolo };
        case '3': 
            operacionSimbolo = '*';
            return { resultado: num1 * num2, simbolo: operacionSimbolo };
        case '4': 
            operacionSimbolo = '/';
            if (num2 === 0) {
                return { resultado: 'Error: División por cero no es válida', simbolo: operacionSimbolo };
            }
            return { resultado: num1 / num2, simbolo: operacionSimbolo };
        default:
            return null;
    }
}

function pregunta() {
    while (true) {
        let num1 = prompt('Ingresa un número: ');
        let num2 = prompt('Ingresa otro número: ');
        let opcion = prompt(
            'Ingresa la operación:\n' +
            '1] Sumar (+)\n' +
            '2] Restar (-)\n' +
            '3] Multiplicar (*)\n' +
            '4] Dividir (/)\n' +
            '0] Salir\n' +
            'Elige una opción: '
        );

        if (opcion === '0') {
            console.log("Saliendo de la calculadora...");
            break;
        }

        let operacion = calculadora(num1, num2, opcion);

        if (operacion === null) {
            console.log("Opción no válida, intenta de nuevo.");
        } else {
            console.log(`El resultado de ${num1} ${operacion.simbolo} ${num2} es: ${operacion.resultado}`);
        }
        console.log("----------------------------------");
    }
}

pregunta();

