//EJERCICIO 1 de JONMIRCHA
/* function contarLetras(cadena) {
  let total = String(cadena);
  total = total.replace(/\s+/g, ""); // Asignar el resultado de trim
  return total.length; // .length es una propiedad, no un método
}
 */
const contarLetras = (cadena = "") => cadena.replace(/\s+/g, "").length;

let actual = contarLetras("Hola Mundo");
console.log(actual); // 10

//EJERCICIO 2 de JONMIRCHA
function cortarCadena(cadena, caracteres) {
  let array = [];
  for (let i = 0; i < caracteres; i++) {
    array.push(cadena[i]);
  }
  return array;
}

let array = cortarCadena("hola mundo", 4);
console.log(array.join(""));

//EJERCICIO 3 de JONMIRCHA
/* function metodoSplit(cadena) {
  let array = [];
  array = cadena.split(" ");
  return array;
} */
const metodoSplit = (cadena) => cadena.split(" ");
console.log(metodoSplit("hola mundo cara de chota picada"));

//EJERCICIO 4 de JONMIRCHA
function metodoMultiplicar(cadena, cant) {
  let actual;
  for (let i = 0; i < cant; i++) {
    if (i === 0) {
      actual = cadena;
    } else {
      actual += ` ${cadena}`;
    }
  }
  return actual;
}

console.log(metodoMultiplicar("Anasheee", 3));

//EJERCICIO 5 de JONMIRCHA

const nueva = function (cadena) {
  let caracteres = [];
  if (!cadena) {
    return console.warn("Debes ingresar una cadena");
  } else {
    for (let i = cadena.length; i > -1; i--) {
      caracteres.push(cadena[i]);
    }
    return caracteres.join("");
  }
};

console.log(nueva(""));

//EJERCICIO 6 de JONMIRCHA

const palabras = (texto, cadena) => {
  if (!texto || !cadena) {
    return 0;
  }

  const partes = texto.split(cadena);

  return partes.length - 1;
};

console.log(palabras("Hola bigote chele mundo mundo mundo", "mundo"));

//EJERCICIO 7 de JONMIRCHA
const cadena = (cadena) => {
  cadena = cadena.toLowerCase();
  if (!cadena) {
    return console.warn("Debes ingresar una cadena");
  }
  let alReves = cadena.split("").reverse().join("");
  if (cadena === alReves) {
    return console.log("La cadena es un palindromo");
  } else {
    return console.log("La cadena no es un palindromo");
  }
};
cadena("Salas");

//EJERCICIO 8 de JONMIRCHA
const eliminarCaracteres = (texto, patron) =>
  texto.replace(new RegExp(patron, "ig"), "");

console.log(eliminarCaracteres("xyz1,xyz2,xyz3,xyz4,xyz5,xyz6,xyz7", "xyz"));

//Ejercicio 9 de JONMIRCHA
const obtenerPseudoaleatorio = (min, max) =>
  Math.floor(Math.random() * (1 + min - max) + min);
console.log(obtenerPseudoaleatorio(501, 600));

//Ejercicio 10 de JONMIRCHA
const capicua = (numero) =>
  typeof numero !== "number"
    ? "Debe ingresar un numero"
    : numero.toString().split("").reverse().join("") === numero.toString()
    ? "Es un numero capicua"
    : "No es un numero capicua";

console.log(capicua(2002));

//Ejercicio 11 de JONMIRCHA
const factorial = (numero) => {
  if (typeof numero !== "number") {
    return "El numero ingresado debe ser de tipo Numerico";
  }
  if (!numero) {
    return "Debe ingresar un valor";
  }

  let acumulador = numero;
  for (let i = numero - 1; i > 1; i--) {
    acumulador *= i;
  }
  return acumulador;
};
console.log(factorial(5));

//Ejercicio 12 de JONMIRCHA
const primo = (numero) => {
  if (typeof numero !== "number") {
    return "El numero ingresado debe ser de tipo Numerico";
  }
  if (undefined) {
    return "Debe ingresar un valor";
  }

  if (numero === 2) {
    return "El numero ingresado es no primo";
  }
  if (numero === 1) {
    return "El numero ingresado es primo";
  }
  let contador = 0;
  let actual = numero;
  for (let i = 1; i < numero + 1; i++) {
    if (actual % i === 0) {
      contador++;
    }
  }

  if (contador > 2) {
    return "El numero es no primo";
  } else {
    return "El numero es primo";
  }
};

1;
console.log(primo(17));

//Ejercicio 13 de JONMIRCHA
const parOImpar = (num) =>
  num % 2 === 0 ? "El numero es par" : "El numero es impar";
console.log(parOImpar(6));

//Ejercicio 14 de JONMIRCHA
const gradosAF = (num, tipo) =>
  !tipo
    ? "Debes ingresar una cadena"
    : String(tipo).toLocaleLowerCase() === "c"
    ? `${num}°C son ${Math.floor((num * 9) / 5 + 32)}°F`
    : String(tipo).toLocaleLowerCase() === "f"
    ? `${num}°F son ${Math.floor(((num - 32) * 5) / 9)}°C`
    : "La unidad ingresada es incorrecta";

console.log(gradosAF(8.5, "c"));

//Ejercicio 18 de JONMIRCHA
const buscarLetras = (texto) => {
  if (texto === undefined) {
    return "Debe ingresar una cadena de texto";
  }

  if (typeof texto !== "string") {
    return "Debe ingresar una cadena";
  }

  let coincidencias = texto.match(new RegExp(/[aeiou]/gi));

  return coincidencias.length;
};

console.log(buscarLetras("Exequiel"));

//Ejercicio 19 de JONMIRCHA
const validarNombre = (texto) => {
  if (texto === undefined) {
    return "Debe ingresar una cadena de texto";
  }

  if (typeof texto !== "string") {
    return "Debe ingresar una cadena";
  }

  let pattern = new RegExp(/^[a-z]+$/i);
  let coincidencia = pattern.test(texto);

  return `¿Es nombre? ${coincidencia}`;
};

console.log(validarNombre("Exequiel"));

//Ejercicio 20 de JONMIRCHA
const validarEmail = (correo) => {
  if (correo === undefined) {
    return "Debe ingresar una cadena de texto";
  }

  if (typeof correo !== "string") {
    return "Debe ingresar una correo";
  }

  let pattern = new RegExp(/^[a-z0-9_]+@[a-z0-9_]{2,}\.[a-z]{2,4}$/i);
  let coincidencia = pattern.test(correo);

  return `¿Es un correo valido? ${coincidencia}`;
};

console.log(validarEmail("Exequiel2015@g.com"));

//Ejercicio 21 de JONMIRCHA
const arrayElevado = (numeros) => {
  if (numeros === undefined) {
    return "Debe ingresar un array";
  }

  if (!(numeros instanceof Array)) {
    return "Se aceptan solo arrays";
  }

  if (numeros.length === 0) return "El arreglo esta vacio";

  for (let num of numeros) {
    if (typeof num !== "number") {
      return "El arreglo ingresado solo debe contener numeros";
    }
  }

  return Math.pow(2, numeros);
};

console.log(arrayElevado());
console.log(arrayElevado(34));
console.log(arrayElevado([]));
console.log(arrayElevado(["a", "b"]));
console.log(arrayElevado([2, 4, 6, 8]));
