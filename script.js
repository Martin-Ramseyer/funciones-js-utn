function esPar(numero) {
  return numero % 2 === 0;
}
console.log(esPar(2));
console.log(esPar(3));

function esPar(numero) {
  if (!Number.isInteger(numero)) {
    return "El número ingresado no es un entero";
  }

  return numero % 2 === 0;
}

console.log(esPar(4));
console.log(esPar(7));
console.log(esPar(2.5));

function esPar(numero) {
  const entero = parseInt(numero);

  if (isNaN(entero)) {
    return "El valor ingresado no es un número válido";
  }

  if (entero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(esPar(2));
console.log(esPar(3));
console.log(esPar("1.5"));

function contarCaracteres(cadena) {
  return cadena.length;
}
console.log(contarCaracteres("Hola, mundo!"));

function determinarSigno(numero) {
  if (numero > 0) {
    return "positivo";
  } else if (numero < 0) {
    return "negativo";
  } else {
    return "cero";
  }
}

console.log(determinarSigno(5));
console.log(determinarSigno(-2));
console.log(determinarSigno(0));
