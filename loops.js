// a basic arrow function in js
// const someName = () => {};

// // unnamed arrow function
// () => {};

// someName();

const numbers = [1, 2, 3, 4, 5, 6];

// methods on arrays in js (and ruby)
// forEach (each in ruby), map, filter(select in ruby), reduce, find

const logThing = (thing) => {
  console.log(thing);
};

logThing("hello");

// forEach - go through each thing in an array and run the function given,
// returns undefined (in ruby returns the orignal array)
// in js functions can take function as arguments

let returnValue = numbers.forEach(logThing);
console.log("returnValue: ", returnValue);

numbers.forEach((thing) => {
  console.log(thing);
});

numbers.forEach((thing) => {
  if (thing % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
});

// map - go through each thing in an array and run the function given,
// what ever that function returns is push into a NEW array
// which is return at the end
let newValues = numbers.map((num) => {
  // what ever that is returned is push into a NEW array
  // return num % 2 === 0 ? { num: num, val: "even" }  : { num: num, val: "odd" };
  if (num % 2 === 0) {
    return { num: num, val: "even" };
  }
  return { num: num, val: "odd" };
});

console.log(newValues);
