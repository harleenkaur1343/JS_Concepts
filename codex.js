//constructor function

function Person(name) {
  this.name = name;
}

Person.prototype.greeting = function () {
  console.log("Hi this is " + this.name);
};

const alice = new Person("Alice");
const bobby = Person("Bobby");

alice.greeting();
//this is the window object here now without new key

//BTH
//const alice ={},
//_proto_ = Person.prototype
//Person.call(alice,"Alice")
