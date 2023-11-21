// Styles for console.log
// 1. Pass the css styles in an array
const styleLog = [
  'color: #333',
  'background: #ffd500',
  'font-size: .8rem',
  'padding: 2px 5px',
  'margin:5px 0px',
  'border-radius:5px',
].join(';');

/* // descomentar para personalizar el nombre ↓↓↓
 const userName = prompt('Antes de empezar, me gustaría saber tu nombre. ¿Cómo te llamas?');
console.log(`%cHola, ${userName} bienvenid@!`, styleLog); */

// Empezamos
console.log('A continuación te presento las soluciones del Sprint 2 de Angular');
console.log('%cBloc 1.1: Arrow functions', styleLog);
console.log('----------------------------------------------');
console.log('### Arrow functions');
console.log('----------------------------------------------');
console.log('## Nivel 1 [AF]');
console.log('# Ejercicio 1');

/*  -- Ejercicio 1:
    -- Ejercicio: convierte esta función en una función de flecha */

function add2(a, b) {
  return a + b;
}

//  -- Solución:
const add = (a, b) => a + b;
const sum = add(3, 4);

console.log('Solución: \n \nconst add = (a, b) => a + b;');
console.log(sum);

// -------------------------------------------------------------------

console.log('----------------------------------------------');
console.log('# Ejercicio 2');

/*  -- Ejercicio 2:
    -- Función flecha número random de 0,100 */
const randomNumber = () => Math.floor(Math.random() * 100) + 1;
const myRandomNumber = randomNumber();
console.log('Solución: \n \nconst randomNumber = () => Math.floor(Math.random() * 100) + 1;');
console.log(myRandomNumber);

// -------------------------------------------------------------------

console.log('----------------------------------------------');
console.log('# Ejercicio 3');

/*  -- Ejercicio 3:
    -- Crea la clase persona + saludar a persona
    -- clase 'person' dentro del archivo Person.js */
greet('Ismael');

// -------------------------------------------------------------------

console.log('----------------------------------------------');
console.log('## Nivel 2 [AF]');
console.log('# Ejercicio 4');

/*  -- Ejercicio 4 :
    -- Función flecha dentro de un loop 'printNumbers
    -- numbers = [10,20,30,40,50,60,70,80,90,100] */

console.log('# ► Array utilizada => [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]');

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const printNumbers = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
};
printNumbers(numbers);

// -------------------------------------------------------------------

console.log('----------------------------------------------');
console.log('## Nivel 3 [AF]');
console.log('# Ejercicio 5');
/*  -- Ejercicio 5 :
    -- Función flecha con 'setTimeout'
    -- que imprima el mensaje 'Acaban de pasar 3 segundos' en consola */

setTimeout(() => {
  console.log('⏱ AF => Nivel 3 => Ejercicio 5: Buah! 5 segundos... Locura.');
}, 5000);
setTimeout(() => {
  console.log('⏱ AF => Nivel 3 => Ejercicio 5: Ahora acaban de pasar 3 segundos');
}, 3000);
setTimeout(() => {
  console.log('⏱ AF => Nivel 3 => Ejercicio 5: Acaba de pasar 1 segundos');
}, 1000);

// -------------------------------------------------------------------
console.log('%cBloc 1.2: Operador ternario', styleLog);
console.log('----------------------------------------------');
console.log('### Operador Ternario');
console.log('----------------------------------------------');
console.log('## Nivel 1 [OT]');
console.log('# Ejercicio 1 [Introduce la edad en el DOM]');

/*  -- Ejercicio 1:
    -- Operador ternario básico 
    -- ¿tienes edad para poder conducir? */

const potConduir = () => {
  const edad = parseInt(prompt('¿Cuantos años tienes?'));
  let mensaje = edad >= 18 ? 'Genial!! Puedes conducir!' : 'Lo siento! NO Puedes conducir!';
  console.log(mensaje); // Mostrar en la consola
  document.querySelector('#aptoParaConducir').innerHTML = mensaje; // Mostrar en el HTML
};

// -------------------------------------------------------------------

console.log('----------------------------------------------');

console.log('# Ejercicio 2 [Introduce los números en el DOM]');

/*  -- Ejercicio 2:
    -- Operador ternario de compración  
    -- compara 2 números para ver cuál es más grande */

const compararNum = () => {
  let num1 = parseInt(prompt('Escribe el número 1'));
  let num2 = parseInt(prompt('Escribe el número 2'));

  let mensaje = num1 > num2 ? 'El num1 es más grande que el num2' : 'El num2 es más grande o igual que el num1';
  console.log(mensaje); // Mostrar en la consola
  document.querySelector('#resultadoCompararNum').innerHTML = mensaje; // Mostrar en el HTML
};

// -------------------------------------------------------------------

console.log('----------------------------------------------');
console.log('## Nivel 2 [OT]');
console.log('# Ejercicio 3 [Introduce los valores a determinar en el DOM]');

/*  -- Ejercicio 3:
    -- Operador ternario enlazado  */

const determinarNum = () => {
  const userNum = prompt('Escriba el número a determinar');

  let userNumDeterminado =
    userNum == 0 ? 'El valor es 0' : userNum > 0 ? 'El valor es positivo' : 'El valor es negativo';
  console.log(userNumDeterminado); // Mostrar en la consola
  document.querySelector('#determinarNum').innerHTML = userNumDeterminado; // Mostrar en el HTML
};

// -------------------------------------------------------------------

console.log('----------------------------------------------');

console.log('# Ejercicio 3.b [Introduce 3 valores en el DOM]');

/*  -- Ejercicio 3.b:
    -- Operador ternario enlazado
    -- Valor máximo de 3 parámetros  */

const maxNum = () => {
  let num1 = parseInt(prompt('Introduce le primer número'));
  let num2 = parseInt(prompt('Introduce le segundo número'));
  let num3 = parseInt(prompt('Introduce le tercer número'));

  let valorMax =
    num1 > num2 && num1 > num3
      ? 'El valor máximo es el num1'
      : num2 > num1 && num2 > num3
      ? 'El valor máximo es el num2'
      : 'El valor máximo es el num3';

  console.log(valorMax); // Mostrar en la consola
  document.querySelector('#maxNum').innerHTML = valorMax; // Mostrar en el HTML
};

// -------------------------------------------------------------------

console.log('----------------------------------------------');
console.log('## Nivel 3 [OT]');
console.log('# Ejercicio 4');

/*  -- Ejercicio 4 :
    -- parOImparArray = [1,2,3,4,5,6,7,8,9,10] */

console.log('# ► Array utilizada => [1,2,3,4,5,6,7,8,9,10]');

const parOImparArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const parOImpar = (parOImparArray) => {
  for (let i = 0; i < parOImparArray.length; i++) {
    let mensaje = parOImparArray[i] % 2 ? `${[i]} es par` : `${[i]} es inpar`;
    console.log(mensaje);
  }
};
parOImpar(parOImparArray);

// -------------------------------------------------------------------
console.log('%cBloc 1.3: Callbacks', styleLog);
console.log('----------------------------------------------');
console.log('### Callbacks');
console.log('----------------------------------------------');
console.log('## Nivel 1 [CB]');
console.log('# Ejercicio 1');

/*  -- Ejercicio 1:
    -- Callback básico 
    -- función: procesar invoca función de callback */

// Definición de la función procesar
const procesar = (numero, callback) => {
  // Invocar la función de callback y pasar el número como parámetro
  callback(numero);
};

// Ejemplo de uso
const miCallback = (numero) => {
  console.log(`El número procesado es: ${numero}`);
};

// Llamada a la función procesar, pasando un número y el callback
procesar(42, miCallback);

// -------------------------------------------------------------------

console.log('----------------------------------------------');

console.log('# Ejercicio 2');

/* // descomentar para personalizar el nombre ↓↓↓
 console.log(`%cSeguimos! ${userName}`, styleLog); */

/*  -- Ejercicio 2:
    -- Callback en operaciones matemáticas
    -- función: calculadora */

const calculadora = (num1, num2, callback) => {
  callback(num1, num2);
};

// Calculadora
const sumaCallback = (num1, num2) => {
  let resultado = num1 + num2;
  console.log(`La suma de ${num1} + ${num2} es ${resultado}`);
};

// Llamada a la función procesar, pasando un número y el callback
calculadora(5, 3, sumaCallback);

// -------------------------------------------------------------------

console.log('----------------------------------------------');
console.log('## Nivel 2 [CB]');
console.log('# Ejercicio 3');

/*  -- Ejercicio 3 :
    -- callback en funciones asíncronas 
    -- Función esperarISaludar */

const esperarISaludar = (name1, callback) => {
  setTimeout(() => {
    callback(name1);
  }, 2000);
};

const saludaCallback = (name1) => {
  console.log(`⏳ CB => Nivel 2 => Ejercicio 3: Hello! ${name1}`);
};
// Llamada a la función esperarISaludar, pasando el nombre1 y el callback
esperarISaludar('Ismael', saludaCallback);

// -------------------------------------------------------------------

console.log('----------------------------------------------');

console.log('# Ejercicio 4');

/*  -- Ejercicio 4 :
    -- callback con arrays
    -- Función processarElements */

const processarElements = (miArray, callback) => {
  for (let i = 0; i < miArray.length; i++) {
    callback(miArray[i]);
  }
};

// Ejemplo de uso
const myCallback = (elemento) => {
  console.log(`Procesando elemento: ${elemento}`);
};

const arrayEjemplo = [1, 2, 3, 4, 5];
processarElements(arrayEjemplo, miCallback);

// -------------------------------------------------------------------

console.log('----------------------------------------------');
console.log('## Nivel 3 [CB]');
console.log('# Ejercicio 5');

/*  -- Ejercicio 5 :
    -- Función processarCadena */

const processarCadena = (miCadena, callback) => {
  const cadenaEnMayusculas = miCadena.toUpperCase();
  callback(cadenaEnMayusculas);
};

// Ejemplo de uso
const cadenaCallback = (cadenaEnMayusculas) => {
  console.log(`Aquí tienes tu cadena: \n${miCadena} \nen mayúsculas \n${cadenaEnMayusculas}`);
};
let miCadena = 'como mola it academy';
processarCadena(miCadena, cadenaCallback);

// -------------------------------------------------------------------
console.log('%cBloc 1.4: Rest & Spread operators', styleLog);
console.log('----------------------------------------------');
console.log('### Rest & Spread operators');
console.log('----------------------------------------------');
console.log('## Nivel 1 [RSO]');
console.log('# Ejercicio 1');

// Vídeo Youtube: https://youtu.be/_5V6siSlP2k?si=u7C-V1oXHbnYDa67

/*  -- Ejercicio 1 :
    -- Spread operator 2 arrays */

const lista1 = [1, 2, 3, 4, 5];
const lista2 = [6, 7, 8, 9, 10];

const listaConjunta = [...lista1, ...lista2];
console.log(listaConjunta);

const listaConjuntaExtra = [...lista1, ...lista2, 11, 12, 13, 14, 15];
console.log(listaConjuntaExtra);

// -------------------------------------------------------------------

console.log('----------------------------------------------');

console.log('# Ejercicio 2');

/*  -- Ejercicio 2 :
    -- Operador Rest en funciones */

const sumaListaNum = (...numeros) => {
  const resultado = numeros.reduce((prevValue, nextValue) => prevValue + nextValue, 0);
  console.log(resultado);
};

sumaListaNum(...lista1, ...lista2, ...listaConjunta, ...listaConjuntaExtra);

// -------------------------------------------------------------------

console.log('----------------------------------------------');
console.log('## Nivel 2 [RSO]');
console.log('# Ejercicio 3');

/*  -- Ejercicio 3 :
    -- copiando objetos con spread */

const objecte1 = {
  nombre: 'Raimon',
  edad: 25,
  email: 'raimon@test.com',
};
console.log('-- Ver Objeto 1');
console.log(objecte1);

const objecte2 = { ...objecte1 };

console.log('-- Ver Objeto 2 clonado de objeto 1');
console.log(objecte2);

objecte2.edad = 36;
console.log('-- Ver Objeto 2 con edad modificada a 36');
console.log(objecte2);

console.log('-- Ver Objeto 1 sin cambios');
console.log(objecte1);

// -------------------------------------------------------------------

console.log('----------------------------------------------');
console.log('## Nivel 2 [RSO]');
console.log('# Ejercicio 4');

/*  -- Ejercicio 4 :
    -- Rest en Destructuring */

const listaX = [1, 2, 3, 4, 5];

// Utilizando destructuring y el operador rest
const [primerElemento, segundoElemento, ...restoElementos] = listaX;

console.log(primerElemento);
console.log(segundoElemento);
console.log(restoElementos);

// -------------------------------------------------------------------

console.log('----------------------------------------------');
console.log('## Nivel 3 [RSO]');
console.log('# Ejercicio 5');

/*  -- Ejercicio 5 :
    -- Spread en funciones */

const argArray = ['amarillo', 'azul', 'verde'];

const argumentos = (...argArray) => {
  console.log(...argArray);
};

argumentos(...argArray);

// -------------------------------------------------------------------

console.log('----------------------------------------------');
console.log('## Nivel 3 [RSO]');
console.log('# Ejercicio 6');

/*  -- Ejercicio 6 :
    -- Fusionando Objetos con Spread */

const nombre = {
  nombre: 'Luis',
  apellido: 'López',
};
const direccion = {
  calle: 'Calle Rueda, 123',
  localidad: 'Madrid',
  país: 'España',
};

const usuario = {
  ...nombre,
  ...direccion,
};

console.log('-- Ver Objeto Nombre');
console.log(nombre);
console.log('-- Ver Objeto Dirección');
console.log(direccion);
console.log('-- Ver Objeto Fusionado');
console.log(usuario);

// -------------------------------------------------------------------
console.log('%cBloc 1.5: Array transformations', styleLog);
console.log('----------------------------------------------');
console.log('### Array transformations');
console.log('----------------------------------------------');
console.log('## Nivel 1 [AT]');
console.log('# Ejercicio 1');

/*  -- Ejercicio 1 :
    -- Función MAP */

console.log('# ► Array utilizada => [1, 2, 3, 4]');
const numeros = [1, 2, 3, 4];
const dobles = numeros.map(function (numero) {
  return Math.pow(numero, 2); // método que calcula el cuadrado
});

console.log('-- Ver Números');
console.log(numeros);
console.log('-- Ver Números al cuadrado');
console.log(dobles);

// -------------------------------------------------------------------

console.log('----------------------------------------------');
console.log('## Nivel 2 [AT]');
console.log('# Ejercicio 2');

/*  -- Ejercicio 2 :
    -- Función Filter */

console.log('# ► Array utilizada => [1, 2, 3, 4]');
const numeros2 = [1, 2, 3, 4];
const numerosPares = numeros2.filter((numero) => numero % 2 == 0);
console.log(numerosPares);

// -------------------------------------------------------------------

console.log('----------------------------------------------');
console.log('## Nivel 3 [AT]');
console.log('# Ejercicio 3');

/*  -- Ejercicio 3 :
    -- Función Find */

console.log('# ► Array utilizada => [1, 10, 8, 11]');
const numeros3 = [1, 10, 8, 11];
const numFind = numeros3.find((numero) => numero > 10);

console.log(numFind);

// -------------------------------------------------------------------

console.log('----------------------------------------------');
console.log('## Nivel 4 [AT]');
console.log('# Ejercicio 4');

/*  -- Ejercicio 4 :
    -- Función Reduce */

console.log('# ► Array utilizada => [13, 7, 8, 21]');
const numeros4 = [13, 7, 8, 21];

const valorInicial = 0;
const sumNumeros4 = numeros4.reduce((prevValue, nextValue) => prevValue + nextValue, 0);

console.log(sumNumeros4);

// -------------------------------------------------------------------

console.log('----------------------------------------------');
console.log('## Nivel 2 [AT]');
console.log('# Ejercicio 5');

/*  -- Ejercicio 5 :
    -- Función que filtra, multiplica, suma y devuelve resultado */

console.log('# ► Array utilizada => [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]');
const numeros5 = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

// filtrar números mayores o iguales a 10.
console.log('filtrar números mayores o iguales a 10');
const filtroNum = numeros5.filter((numero) => numero >= 10);
console.log(filtroNum);

// Multiplica cada número filtrado por 2
console.log('Multiplica cada número filtrado por 2');
const filtroNumPorDos = filtroNum.map(function (numero) {
  return numero * 2; // método que calcula el cuadrado
});
console.log(filtroNumPorDos);

// calcula la suma de los números filtrado y multiplicados por 2
console.log('calcula la suma de los números filtrado y multiplicados por 2');
const sumNumFiltrados = filtroNumPorDos.reduce((prevValue, nextValue) => prevValue + nextValue, 0);
console.log(sumNumFiltrados);

// Ahora vamos a intentar realizar todos estos métodos en una única función y que ocupe una sola línea.

const ej5 = (numeros5) => {
  const resultado = numeros5
    .filter((numero) => numero >= 10)
    .map((numero) => numero * 2)
    .reduce((prevValue, nextValue) => prevValue + nextValue, 0);

  console.log(resultado);
};

ej5(numeros5);

// -------------------------------------------------------------------

console.log('----------------------------------------------');
console.log('## Nivel 3 [AT]');
console.log('# Ejercicio 6');

// Vídeo Youtube: https://youtu.be/37RiYprt1CU?si=fX38A73v92ytNVMD

/*  -- Ejercicio 6 :
    -- Every /Some */

console.log('# ► Array utilizada => [11,12,13,14]');
const numeros6 = [11, 12, 13, 14];

// verificar con el método every si todos o algunos de los elementos son mayores que 10, respectivamente

function esMayorQue10(numero) {
  return numero > 10;
}

const everyNumMayorQue10 = numeros6.every(esMayorQue10);
console.log('Método Every > 10');
console.log(everyNumMayorQue10);

const someNumMayorQue10 = numeros6.some(esMayorQue10);
console.log('Método Some > 10');
console.log(someNumMayorQue10);

// -------------------------------------------------------------------
console.log('%cBloc 1.6: Array loops', styleLog);
console.log('----------------------------------------------');
console.log('### Array loops');
console.log('----------------------------------------------');
console.log('## Nivel 1 [AL]');
console.log('# Ejercicio 1');

/*  -- Ejercicio 1 :
    -- Bucle forEach */
