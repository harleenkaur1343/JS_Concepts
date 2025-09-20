const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 }
];

//const usernames = users.map(({age, ...rest})=>rest); //without mutation
//with mutation 
users.forEach(el=> {
    delete el.age;
});

console.log(users)