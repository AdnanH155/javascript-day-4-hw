import { add } from "./utils.js";
add(2, 2);
console.log(multi(2, 2));

import random, { add } from "./utils.js";
console.log(random(1, 1));

// 6 - defeat parameters
function sum(x = 3, y = 5) {
  return x + y;
  console.log(sum(5, 15));
  console.log(sum(7));
  console.log(sum());
}

// 7 - template strings
const data = { name: "Adnan", age: 24, location: "London" };
const newPerson = `His name is ${data.name}, his age is ${data.age} and his location is ${data.location}`;
console.log(newPerson);
8 - trim;
const greeting = "   Welcome to my website    ";
console.log(greeting.trimStart());

// 9 - using a function to create an object
function createFootballer(name, age, position) {
  //   name = name.toUppercase();
  return { name: name, age: age, position: position };
}
const footballer1 = createFootballer("saka", 21, "RW");
const footballer2 = createFootballer("martenelli", 22, "LW");
console.log(footballer1, footballer2);

// 10 - instanceof
function createFootballer(name) {
  this.name = name;
}
const saka = new createFootballer("saka");
console.log(saka instanceof createFootballer);

// 11 - creating an object with a method
const person = {
  firstName: "John",
  lastName: "Smith",
};
person.name = function () {
  return this.firstName + " " + this.lastName;
};
// console.log(person);

// 12 - Using Bind
const person = {
  firstName: "John",
  lastName: "Smith",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
const fullNameBinded = person.fullName.bind({
  firstName: "Bukayo",
  lastName: "Saka",
});
console.log(fullNameBinded());

// 12 - using call
var person = {
  firstName: "Gabriel",
  lastName: "Martenelli",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person.fullName.call(person));
// CHANGING CONTEXT
var person = {
  firstName: "Gabriel",
  lastName: "Martenelli",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person.fullName.call({ firstName: "Bukayo", lastName: "Saka" }));
