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
  console.log('Buah! 5 segundos... Locura.');
}, 5000);
setTimeout(() => {
  console.log('Ahora acaban de pasar 3 segundos');
}, 3000);
setTimeout(() => {
  console.log('Acaba de pasar 1 segundos');
}, 1000);

console.log('----------------------------------------------');
console.log('### Operador Ternario');
console.log('----------------------------------------------');
console.log('► Nivel 1');
console.log('►► Ejercicio 1');

/*  -- Ejercicio 1:
    -- Operador ternario básico */

const potConduir = () => {
  let edad = prompt('¿Cuantos años tienes?');
  const mensaje = edad >= 18 ? 'Genial!! Puedes conducir!' : 'Lo siento! NO Puedes conducir!';
  console.log(mensaje); // Mostrar en la consola
  document.querySelector('#aptoParaConducir').innerHTML = mensaje; // Mostrar en el HTML
};
