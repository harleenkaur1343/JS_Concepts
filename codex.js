//Async an await allows us to write async funs in cleaner way
//await cammot be used without async
//async always returns a promise
//if a static value returns it wrapped in a resolved promise
//await too same
//fire functions returning promised together and then await their results
//increases efficiency
//uses try n catch

function fetchWithError() {
  return new Promise((resolve, _) => {
    setTimeout(() => resolve("This is resolved data from promise"), 1000);
  });
}

async function getData() {
  try {
    const result_1 = fetchWithError();
    const result_2 = fetchWithError();

    const result1 = await result_1;
    const result2 = await result_2;
    console.log("Result_1 ", result1);
    console.log("Result_2 ", result2);
  } catch (error) {
    console.log("Error is ", error);
  }
}
getData(); // executes the function
