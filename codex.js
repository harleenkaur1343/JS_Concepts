const obj = {
  name: "Harleen",
  outer() {
    console.log("outer this:", this.name); //Harleen
    //in here this = obj
    function inner() {
      console.log("inner this:", this.name);
    }
    inner(); //no object calling tabi empty refers to windows.name
    //use arrow functions
    arrowInner = () => {
      console.log("Name from arrow inner: ", this.name);
    };
    arrowInner();
    //defined inside outer - this = obj
    //Name from arrow inner:  Harleen
  },
};

obj.outer();
