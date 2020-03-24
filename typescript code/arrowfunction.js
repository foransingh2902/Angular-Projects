// normal way
var something = function (message) {
    console.log(message);
};
// arrow function
var doSomething = function (message) {
    console.log(message);
};
// can even exclude the {} if only one line of code
var doSomethingN = function (message) { return console.log(message); };
something("foran");
doSomething("singh");
doSomethingN("jasrana");
