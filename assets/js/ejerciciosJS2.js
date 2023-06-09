

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros .
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if (x > y) {
    return x;
  } else if (y > x) {
    return y;
  } else {
    return x;
  } 
}

console.log(obtenerMayor(9,5))

// function mayoriaDeEdad(edad) {
//   //Determinar si la persona según su edad puede ingresar a un evento.
//   //Si tiene 18 años ó más, devolver --> "Allowed"
//   //Si es menor, devolver --> "Not allowed"
//   edad >= 18 ? console.log('Allowed') : console.log('Not allowed');
// }

const mayoriaDeEdad = edad => edad >= 18 ? console.log('Allowed') : console.log('Not allowed');

mayoriaDeEdad(18)
mayoriaDeEdad(17)
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  if(status === 1){
    return console.log('Online');
  } else if(status === 2){
    return console.log('Away');
  } else{
    console.log('Offline');
  }
}

conection(1);
conection(2);
conection(5);

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  if(idioma === 'aleman'){
    return console.log('Guten Tag!');
  } else if(idioma === 'mandarin'){
    return console.log('Ni Hao!');
  } else if(idioma === 'ingles'){
    return console.log('Hello!')
  } else{
    console.log('Hola!')
  }
}

saludo('aleman');
saludo('mandarin');
saludo('ingles');
saludo('otro');


function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuelve --> "This is blue"
  //En caso que el color recibido sea "red", devuelve --> "This is red"
  //En caso que el color recibido sea "green", devuelve --> "This is green"
  //En caso que el color recibido sea "orange", devuelve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  const colores = {
    Blue: 'blue',
    Red: 'red',
    Green: 'green',
    Orange: 'orange',
    Default: 'Color not found'
  }

}

// function esDiezOCinco(numero) {
//   // Devuelve "true" si "numero" es 10 o 5
//   // De lo contrario, devuelve "false"
//   // Tu código:
//   return console.log(numero === 10 || numero === 5)
// }

const esDiezOCinco = numero => console.log(numero === 10 || numero === 5);

esDiezOCinco(3)
esDiezOCinco(10)
esDiezOCinco(5)

// function estaEnRango(numero) {
//   // Devuelve "true" si "numero" es menor que 50 y mayor que 20
//   // De lo contrario, devuelve "false"
//   // Tu código:
//   return console.log(numero < 50 && numero > 20);
// }

const estaEnRango = numero => console.log(numero < 50 && numero > 20);

estaEnRango(30);
estaEnRango(50);
estaEnRango(20);

// function esEntero(numero) {
//   // Devuelve "true" si "numero" es un entero (int/integer)
//   // Ejemplo: 0.8 -> false
//   // Ejemplo: 1 -> true
//   // Ejemplo: -10 -> true
//   // De lo contrario, devuelve "false"
//   // Pista: Puedes resolver esto usando `Math.floor`
//   // Tu código:
//   let entero = Math.floor(numero);
  
//   return console.log(entero === numero);
// }

const esEntero = numero => {
  let entero = Math.floor(numero);
  return console.log(entero === numero);
}

esEntero(4);
esEntero(4.5);
esEntero(-3.1);

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  let esDivisiblePorTres = numero % 3 === 0;
  let esDivisiblePorCinco = numero % 5 === 0;
  if(esDivisiblePorTres && esDivisiblePorCinco){
    return console.log('fizzbuzz');
  } else if(esDivisiblePorTres){
    return console.log('fizz');
  } else if(esDivisiblePorCinco){
    return console.log('buzz');
  } else{
    return console.log('No es divisible ni por 3 ni por 5');
  }
}

fizzBuzz(15);
fizzBuzz(9);
fizzBuzz(20);
fizzBuzz(22);

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 

}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  
}

// esPrimo(17);

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  return valor ? 'Soy verdadero' : 'Soy falso';
}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   

}

function tieneTresDigitos(numero){
  //Leer un número entero y determinar si tiene 3 dígitos.
  //Escribe tu código aquí

}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  let i = 1;
  do {
    numero += 5;
    i++;
  } while (i <= 8);
  return numero;
}


