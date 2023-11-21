class Person {
  // constructor
  constructor(name) {
    this._name = name;
  }

  // getters & setters
  get name() {
    return this._name;
  }
  set name(name) {
    return this._name;
  }
}
// méthods

const greet = (name) => console.log(`Hola, ${name}`);
