//promises in js

const result = 1;
let num = Math.floor(Math.random() * 6) - 1;
console.log(num);

const newPromise = new Promise((resolve, reject) => {
  if (num > 1) {
    resolve(num);
    console.log("Number ", num);
  } else {
    reject("Not true");
  }
})
  .then((value) => {
    console.log(value * 2);
    return value * 2;
  })
  .then((data) => {
    console.log("From previous this", data);
  })
  .catch((error) => {
    console.log("Error caught ", error);
  });

//one catch can handle errors from all this
