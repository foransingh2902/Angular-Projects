// normal way
let something = function(message) {
  console.log(message);
};

// arrow function
let doSomething = message => {
  console.log(message);
};
// can even exclude the {} if only one line of code
let doSomethingN = message => console.log(message);

something("foran");
doSomething("singh");
doSomethingN("jasrana");
