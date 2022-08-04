// // // // // tanque 40 lts 
// // // // // recorrido 480 km todo el tanque

// // // // var tanque = 40;
// // // // var kilometros = 480;
// // // // var distancia = kilometros / tanque;
// // // // var KmporLitros = distancia;
// // // // var tanqueAlcohol = 40;
// // // // var kilometroTnqAlcohol = 300;
// // // // var KmporLitroAlcohol = kilometroTnqAlcohol / tanqueAlcohol;

// function saltarlinea() {
//     document.write("<br>");

// };

// function imprimir(frase) {
//     document.write(frase);
//     saltarlinea();
// };

// // // // imprimir("Por cada litro de gasolina el carro recorre " + KmporLitros + " Km." + "<br>" + "En el caso de ser un tanque de Alcohol recorreria por litro " + KmporLitroAlcohol + " Km.")

// // // // saltarlinea();
// // // // saltarlinea();

// // // // imprimir("hola 1");
// // // // imprimir("hola 2");
// // // // imprimir("queso");

// // // // var edadBenja = 5
// // // var edadMateo = 20
// // // var diferenciaEdad = edadMateo - edadBenja

// // // function resultado() {
// // //     diferenciaEdad();
// // //     saltarlinea();
// // //     saltarlinea();
// // // }

// // // imprimir("Nuestra diferencia de edad es " + diferenciaEdad)
// // // imprimir("hola")


// // // var pesoMateo = 113
// // // var alturaMateo = 1.75
// // // var imcMateo = (Math.round(pesoMateo / (alturaMateo * alturaMateo)))

// // // imprimir("El IMC de mateo es " + imcMateo)

// // var nombrePaciente = "Carlos"
// // var peso = 75
// // var altura = 1.75

// // function calcularImc(peso, altura) {
// //     var imc = (Math.round(peso / (altura * altura)));
// //     return imc;
// // };


// // imprimir("El IMC de " + nombrePaciente + " es " + calcularImc(peso, altura));

// // nombrePaciente = prompt("Informe su nombre")
// // var pesoInformado = prompt(nombre + " informe su peso")
// // var alturaInformado = prompt(nombre + " Informe su altura")

// // var imcCalculado = calcularImc(pesoInformado, alturaInformado)

// // imprimir("El imc calculado  de " + nombre + " es: " + imcCalculado)


// //--------------------------------------------------------------------------------------
// // var victorias = parseInt(prompt('Informe la cantidad de victorias'))
// // var empates = parseInt(prompt('Informe la cantidad de empates'))

// // var puntosTotal = victorias * 3 + empates;

// // imprimir("El total de puntos del equipo es : " + puntosTotal)


// // if (puntosTotal > 28) {
// //     imprimir("El equipo esta mejor que el año pasado");
// // }
// // if (puntosTotal < 28) {
// //     imprimir("El equipo esta peor que el año pasado");
// // }
// // if (puntosTotal === 28) {
// //     imprimir("El equipo esta igual que el año pasado");
// // }


// //---------------------------------------------------------------------

// function calcularImc(peso, altura) {
//     return (peso / (altura * altura));
// }

// var nombre = prompt("Informe su nombre");
// var pesoInformado = prompt(nombre + ", Informe su peso");
// var alturaInformado = prompt(nombre + ", Informe su altura");

// var imcCalculado = calcularImc(pesoInformado, alturaInformado);

// imprimir(nombre + ", su imc calculado es : " + imcCalculado);


// if (imcCalculado < 18.5) {
//     imprimir("abajo de lo recomendado")
// };
// if (imcCalculado >= 18.5) {
//     if (imcCalculado < 25) {
//         imprimir("Imc esta dentro de los estandares")
//     }
// };
// if (imcCalculado >= 25) {
//     if (imcCalculado < 30) {
//         imprimir("Considerado sobrepeso")
//     }
// };


// if (imcCalculado > 30) {
//     imprimir("Considerado obesidad")

// ---------------------------------------------------------------------Juego Adivinar

function saltarLinea() {
    document.write("<br>")
    document.write("<br>")
    document.write("<br>")
}

function imprimir(frase) {
    document.write(frase);
    saltarLinea();
}

// let numeroPensado = Math.round(Math.random() * 10);
// let numeroLanzado = parseInt(prompt('ingrese un numero entre 0 y 10'))

// if (numeroPensado == numeroLanzado) {
//     imprimir('acerto')
// } 
// else
//     (numeroPensado != numeroLanzado); {
//     imprimir('erro, el numero pensado era ' + numeroPensado)
// }




let edad = parseInt(prompt("¿Cuál es tu edad?"));
let tieneLicencia = prompt("¿Tienes licencia? Responde Si o No");

if (tieneLicencia = "Si") {
    if (edad >= 18) {
        imprimir('Si podes manejar :)')
    }
} else {
    imprimir("Perdon no podes manejar rey")
};


// 
// let edad = parseInt(prompt("¿Cuál es tu edad?"));
// let tieneLicencia = prompt("¿Tienes licencia? Responde S o N");


// if ((edad >= 18) && (tieneLicencia == "S")) {
//     imprimir("Puedes conducir");
// } else {
//     imprimir("No puedes conducir");
// }