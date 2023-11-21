/* const userName = prompt('Antes de empezar, me gustaría saber tu nombre. ¿Cómo te llamas?');
console.log(`Hola, ${userName} bienvenid@!`); */
console.log('A continuación te presento las soluciones del Sprint 2 de Angular');
console.log('----------------------------------------------');
console.log('### Arrow functions');
console.log('----------------------------------------------');
console.log('► Nivel 1');
console.log('►► Ejercicio 1');

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

console.log('►► Ejercicio 2');

/*  -- Ejercicio 2:
    -- Función flecha número random de 0,100 */
const randomNumber = () => Math.floor(Math.random() * 100) + 1;
const myRandomNumber = randomNumber();
console.log('Solución: \n \nconst randomNumber = () => Math.floor(Math.random() * 100) + 1;');
console.log(myRandomNumber);

// -------------------------------------------------------------------

console.log('►► Ejercicio 3');

/*  -- Ejercicio 3:
    -- Crea la clase persona + saludar a persona
    -- clase 'person' dentro del archivo Person.js */
greet('Ismael');

// -------------------------------------------------------------------

console.log('----------------------------------------------');
console.log('► Nivel 2');
console.log('►► Ejercicio 4');

/*  -- Ejercicio 4 :
    -- Función flecha dentro de un loop 'printNumbers
    -- numbers = [10,20,30,40,50,60,70,80,90,100] */

console.log('►►► Array utilizada => [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]');

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const printNumbers = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
};
printNumbers(numbers);

// -------------------------------------------------------------------

console.log('----------------------------------------------');
console.log('► Nivel 3');
console.log('►► Ejercicio 5');
/*  -- Ejercicio 5 :
    -- Función flecha con 'setTimeout'
    -- que imprima el mensaje 'Acaban de pasar 3 segundos' en consola */

setTimeout(() => {
  console.log('AF => Nivel 3 => Ejercicio 5: Buah! 5 segundos... Locura.');
}, 5000);
setTimeout(() => {
  console.log('AF => Nivel 3 => Ejercicio 5: Ahora acaban de pasar 3 segundos');
}, 3000);
setTimeout(() => {
  console.log('AF => Nivel 3 => Ejercicio 5: Acaba de pasar 1 segundos');
}, 1000);

console.log('----------------------------------------------');
console.log('### Operador Ternario');
console.log('----------------------------------------------');
console.log('► Nivel 1');
console.log('►► Ejercicio 1 [Introduce la edad en el DOM]');

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

console.log('►► Ejercicio 2 [Introduce los números en el DOM]');

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
console.log('► Nivel 2');
console.log('►► Ejercicio 3 [Introduce los valores a determinar en el DOM]');

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

console.log('►► Ejercicio 3.b [Introduce 3 valores en el DOM]');

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
console.log('► Nivel 3');
console.log('►► Ejercicio 4');

/*  -- Ejercicio 4 :
    -- parOImparArray = [1,2,3,4,5,6,7,8,9,10] */

console.log('►►► Array utilizada => => [1,2,3,4,5,6,7,8,9,10]');

const parOImparArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const parOImpar = (parOImparArray) => {
  for (let i = 0; i < parOImparArray.length; i++) {
    let mensaje = parOImparArray[i] % 2 ? `${[i]} es par` : `${[i]} es inpar`;
    console.log(mensaje);
  }
};
parOImpar(parOImparArray);

console.log('----------------------------------------------');
console.log('### Callbacks');
console.log('----------------------------------------------');
console.log('► Nivel 1');
console.log('►► Ejercicio 1 [Introduce la edad en el DOM]');

/*  -- Ejercicio 1:
    -- Callback básico 
    -- función: procesar invoca función de callback */

/* function processar(num, callback) {
  // hacemo algo ...
  num = 10;
  // despues de hacer algo ...
  callback(num);
}

processar(nums, function (num) {
  console.log(`He añadido el ${num} como parámetro`);
}); */
