/* eslint-disable prefer-object-spread */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-use-before-define */

// Urok 011 - Rest Параметр -----------------
max(1, 2, 3);
function max(...numbers) {
  return console.log(numbers);
}
max(); // [1, 2, 3]

// Urok 012 - Spread Operator ---------------
const arr = [7, 5, 2];
const res = Math.max(...arr);
console.log(res); // 7

// Orinak 2
const defaults = {
  host: 'localhost',
  dbName: 'blog',
  user: 'admin',
};
const opts = {
  user: 'John',
  password: 1264,
};
const ress = { ...defaults, ...opts };
console.log(ress);

// Urok 013 - Destructuring Destrukturizaciya ---------------
const person = {
  user: {
    firstName: 'Artur',
    firstFamly: 'Sarux',
  },
  age: 35,
};
const {
  user: { firstName: name, firstFamly: famly },
} = person;
console.log(name, famly); // Artur Sarux

// Urok 014 - Array destructuring -------------------------
const num = [1, 2, 3, 4, 5];
const [, a, , b] = num;
console.log(num); // [2, 4]

// Orinak 2
const dict = {
  duck: 'quack',
  dog: 'wuff',
  mouse: 'squeak',
  hamster: 'squeak',
};
const obj = Object.entries(dict)
  .filter(([key, value]) => value === 'squeak')
  .map(([key]) => key);
console.log(obj); // ["mouse", "hamster"]

// Urok 016 - Object assign() ------------------------
const persons = {
  name: 'Bob',
  friends: ['Mark', 'Jacobs'],
};
const shallowCopy = Object.assign({}, person);
person.friends.push('Jane');
console.log(shallowCopy);
// {name: "Bob", friends: ["Mark", "Jacobs", "Jane"] }

// Urok 018 - Prototype -------------------------------
function Animal(namme, voice) {
  this.namme = namme;
  this.voice = voice;
}
Animal.prototype.say = () => {
  console.log(this.namme, 'goes', this.voice);
};
const dog = new Animal('Dog', 'woff');
const cat = new Animal('Cat', 'meof');
dog.say(); // Dog goes woff
cat.say(); // Cat goes meof
