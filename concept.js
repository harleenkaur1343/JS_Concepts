//sync code
console.log("Start");

//outermost macrotask aync
setTimeout(() => {
  console.log("setTimeout callback start");
  //fetch api call
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      console.log("Fetch resolved inside setTimeout (Microtask)");
      return response.json();
    })
    .then((data) => {
      console.log("processed data inside timeout", data.title);
    });

  console.log("settimeout callback end");
}, 0);

//outermost microtask
Promise.resolve().then(() => {
  console.log("Microtask promise resolved");
});

//sync code
console.log("End of code");
