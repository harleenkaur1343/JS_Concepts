//ways to use closures 



function toybox() {
  let toy = "teddy";

  function magichand() {
    console.log(toy);
  }
  return magichand;
}
let fun = toybox();
fun();

//calling functin from inside without returning it 


function toybox() {
  let toy = "teddy";

  function magichand() {
    console.log(toy);
  }
  magichand ()
}
toybox();


//setTimeout executing inner function after delay of few seconds after the outer function has completed execution 

function toybox() {
  let toy = "teddy";

  setTimeout(()=>{
    console.log("toy : ", toy)
  },2000)
}
toybox();


//with event listeners





