function saludar(tuNombre) {
  console.log("Hola" + tuNombre);
}
saludar("pedrito");


function sumar(a, b) {
  const resultado = a + b;
  return resultado;
}
console.log(sumar(2, 3));

function sumar(a, b) {
  const suma = a + b;
  const resultado = `El resultado de la suma es ${suma}`;
  return resultado;
}

const sumando = sumar;
console.log(sumando(2, 3));

function multiplicar(a, b = 1) {
  const resultado = a * b;
  return resultado;
}
console.log(multiplicar(2));
console.log(multiplicar(2, 3));

const multiplicar = function (a, b){
    return a * b;
} 
console.log(multiplicar(2, 3));

function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;

  this.saludar = function () {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
  }
}
let p1 = new Persona("Pedro", 23);
p1.saludar();
let p2 = new Persona("copito", 999);
p2.saludar();

const func = function(){
    return "Funcion tradicional"
}

const func1 = () => {
    return "Funcion flecha"
}

const func2 = (a,b) => a + b;
func2(2,3);

function ejemplo(){
    const variableLocal= 10;
    console.log(variableLocal);
}
ejemplo();
console.log(variableLocal);

let variableGlobal = 10;
function ejemplo(){
    console.log(variableGlobal);
    variableGlobal = 20;
}
ejemplo();


function ejemplo(){
    if(true){
        var x = 10;
        console.log(x);
    }
    console.log(x);
}
ejemplo();
console.log(x);


