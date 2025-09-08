class User {
  constructor(name) {
    this.name = name;
  }
  regular() {
    console.log("Regular: ", this.name);
  }
  arrow = () => {
    console.log("Arrow: ,",this.name);
  };
}

const u = new User("Harleen");
const reg = u.regular;
const arr = u.arrow;


arr(); //does not get detached as it focuses on origin place not how called 
reg(); //detached
