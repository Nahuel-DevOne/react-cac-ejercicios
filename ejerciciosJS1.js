/* 
EJERCICIO EXTRA : RECOMENDAMOS PELICULA - SERIE O LIBRO
UTILIZAMOS SWITCH
 */

// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'Hola mundo';
// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 1;
// Crea una variable booleana:
const nuevoBool = true;
// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;
// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;
// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

/********** Funciones **********/

/********************************************/
console.info('Función devolverString:');
function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return str.toString();
}

const devolverStringFlecha = str => str.toString();

console.log(devolverString("Cadena de texto"));
console.log(devolverStringFlecha(4));

/********************************************/
console.info('Función suma:');
// Le agrego valores por defecto x=0 e y=0
function suma(x=0, y=0) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  return x + y;
}

const sumaFlecha = (x,y) => x + y;

let valorSuma = suma(4,5);
console.log(valorSuma);

/********************************************/
console.info('Función resta:');
// Le agrego valores por defecto x=0 e y=0
function resta(x=0, y=0) {
  // Resta "x" de "y" y devuelve el valor
  // Tu código:
  return y - x;
}

let valorResta = resta(5,4)
console.log(valorResta)

/********************************************/
console.info('Función multiplica:');
// Le agrego valores por defecto x=1 e y=1
function multiplica(x=1, y=1) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  return x * y;
}

let valorMultiplicar = multiplica(4,5);
console.log(valorMultiplicar);

/********************************************/
console.info('Función divide:');
function divide(x=1, y=1) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  let valorDivision = x / y;
  if (y === 0) return new Error('No se puede dividir por cero')
  return x / y;
}

let valorDivision = divide(39,3);
console.log(valorDivision);

/********************************************/
console.info('Función sonIguales:');
function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:utilizar if y else
  // if(x === y){
  //   return true;
  // } else{
  //   return false;
  // }
  // una mejor opción
  return x === y;
}

console.log(sonIguales(1,1))

const sonIgualesFlecha = (x,y) => x === y;
console.log(sonIgualesFlecha(1,1))

/********************************************/
console.info('Función tienenMismaLongitud:');
function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  // if(str1.length === str2.length){
  //   return true;
  // } else{
  //   return false;
  // }
  // una mejor opción
  return str1.length === str2.length
}

console.log(tienenMismaLongitud('hola', 'sapo'))

/********************************************/
console.info('Función menosQueNoventa:');
function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  // if (num < 90) {
  //   return true;
  // } else {
  //   return false;
  // }

  return num < 90;
}

console.log(menosQueNoventa(89));

/********************************************/
console.info('Función mayorQueCincuenta:');
function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  // if (num > 50){
  //   return true;
  // } else {
  //   return false;
  // }

  return num > 50;
}

console.log(mayorQueCincuenta(51));

/********************************************/
console.info('Función obtenerResto:');
function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  return x % y;
}

console.log(obtenerResto(22,4));

/********************************************/
console.info('Función esPar:');
function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  // let esPar = num % 2 === 0 ;

  // if (esPar) {
  //   return true;
  // } else {
  //   return false;
  // }

  return num % 2 === 0;
}

console.log(esPar(1000));

/********************************************/
console.info('Función esImpar:');
function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  // let esImpar = num % 2 === 1;

  // if (esImpar) {
  //   return true;
  // } else {
  //   return false;
  // }

  // Dos maneras de hacerlo
  // return num % 2 !== 0;
  return num % 2 === 1;
}

console.log(esImpar(13437));

/********************************************/
console.info('Función elevarAlCuadrado:');
function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  return num * num;
}

console.log(elevarAlCuadrado(9));

/********************************************/
console.info('Función elevarAlCubo:');
function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  return num * num * num;
}

console.log(elevarAlCubo(3));

/********************************************/
console.info('Función elevar:');
function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  return num ** exponent;
}

console.log(elevar(3,4));

/********************************************/
console.info('Función redondearNumero:');
function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  return Math.round(num);
}

console.log(redondearNumero(7.4));

/********************************************/
console.info('Función redondearHaciaArriba:');
function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  return Math.ceil(num);
}

console.log(redondearHaciaArriba(7.4))

/********************************************/
console.info('Función numeroRandom:');
function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  return Number(Math.random().toFixed(1));
}

console.log(numeroRandom())

/********************************************/
console.info('Función esPositivo:');
function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (numero > 0) {
    return 'Es positivo';
  } else if (numero < 0) {
    return 'Es negativo';
  } else {
    return false
  }
  // lo mismo con un ternario
}

console.log(esPositivo(0));

// const esPositivoFlecha = num => {
//   num > 0 ? 'Es positivo' ? num < 0 'Es negativo' : false 
// }

/********************************************/
console.info('Función agregarSimboloExclamacion:');
function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return `${str}!`
}

console.log(agregarSimboloExclamacion('hola mundo cruel'))

/********************************************/
console.info('Función combinarNombres:');
function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
  // Tu código:
  return `${nombre} ${apellido}`
}

console.log(combinarNombres('Nahuel', 'Lopez'))

/********************************************/
console.info('Función obtenerSaludo:');
function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  return `Hola ${nombre}`
}

console.log(obtenerSaludo('Nahuel'));

/********************************************/
console.info('Función obtenerAreaRectangulo:');
function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:
  return alto * ancho;
}

console.log(obtenerAreaRectangulo(5,4));

/********************************************/
console.info('Función retornarPerimetro:');
function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  return lado * 4;
}

console.log(retornarPerimetro(6));

/********************************************/
console.info('Función areaDelTriangulo:');
function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  return (base * altura) / 2
}

console.log(areaDelTriangulo(5, 4));

/********************************************/
console.info('Función deEuroADolar:');
function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. 
  //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  return euro * 1.2;
}

console.log(deEuroAdolar(10))

/********************************************/
console.info('Función esVocal:');
function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    //si ingresa una consonante muestre en pantalla dato incorrecto
  //Escribe tu código aquí
  let letraMinuscula = letra.toLowerCase()

  if ( letraMinuscula == 'a' || letraMinuscula == 'e' || letraMinuscula == 'i' || letraMinuscula == 'o' || letraMinuscula == 'u' ) {
    console.log('Es vocal');
    document.write('Es vocal');
  } else if (letra.length > 1) {
    console.log('Dato incorrecto');
    document.write('Dato incorrecto');
  } else {
    console.log('dato incorrecto');
    document.write('dato incorrecto');
  }
}

esVocal('c');