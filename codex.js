const person1 = {
  name: "Harleen",
  greet() {
    console.log("Hello, " + this.name);
  },
};

const person2 = { name: "John" };

person1.greet.call(person2);

//call - called immediately
