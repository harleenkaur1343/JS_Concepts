//Async an await allows us to write async funs in cleaner way
//await cammot be used without async
//async always returns a promise
//if a static value returns it wrapped in a resolved promise
//await too same
//fire functions returning promised together and then await their results
//increases efficiency
//uses try n catch

async function test() {
  const val = await Promise.resolve("This is a resolved promise");

  return val;
}

console.log(test()); //returns the promise object
console.log(
  test().then((val) => {
    console.log(val);
  })
);
