console.log('Hola! Binvenidos XD');
console.log('### Arrow functions');
console.log('► Nivel 1');

/*  -- Nivel 1 :
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

console.log('► Nivel 2');

/*  -- Nivel 2 :
    -- Función flecha número random de 0,100 */
const randomNumber = () => Math.floor(Math.random() * 100) + 1;
const myRandomNumber = randomNumber();
console.log('Solución: \n \nconst randomNumber = () => Math.floor(Math.random() * 100) + 1;');
console.log(myRandomNumber);
