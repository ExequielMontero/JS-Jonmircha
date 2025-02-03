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
