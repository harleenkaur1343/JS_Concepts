//Async an await allows us to write async funs in cleaner way
//await cammot be used without async
//async always returns a promise
//if a static value returns it wrapped in a resolved promise
//await too same
//fire functions returning promised together and then await their results
//increases efficiency
//uses try n catch

function fetchWithError() {
  return new Promise((_, reject) => {
    setTimeout(() => reject("Fetch failed"), 1000);
  });
}

async function getData() {
  try {
    const result = await fetchWithError();
    console.log("Results are ", result);
  } catch (error) {
    console.log("Error is ", error);
  }
}
getData()// executes the function 
const res = getData(); //returns promise object in the res 
console.log(res);
