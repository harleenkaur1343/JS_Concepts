const nums = [1, 2, 3, 4, 5];

const double = nums.map((num) => num * 2);
console.log(double);

const mulsthree = double.filter((num) => num % 3 == 0);
console.log(mulsthree);

const sum = double.reduce((accu, val) => val + accu, 0);
//val+accu gets stored in accumulator
console.log("Sum of double " + sum);

//flattening a 2d array

const nestedArrays = [[1], [3, 4], [5]];
console.log(nestedArrays);

const flatarr = nestedArrays.reduce((accu,arr) => {
  console.log(arr);
  return accu.concat(arr) //concat returns a new array 
  
},[]);
console.log(flatarr)

const users = [
{ id: 1, name: 'Alice' },
{ id: 2, name: 'Bob' },
];

//converting an object to array by extracting property
const usernames = users.map(user=>user.name)
console.log(usernames)


