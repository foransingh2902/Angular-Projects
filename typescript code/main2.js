var a;
a = 2;
a = "name";
a = true;
// to avoid this use type annotations
var b;
// b='a'; this will give an error now
b = 5;
// different types
var a1;
var a2;
var a3;
var a4; // by default also its any
var a5;
var a6 = [1, 2, "name", true];
// in plain javascript
var colorRed = 0;
var colorBlue = 0;
var colorGreen = 0;
// in typescript we can create a enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
// its equivalent to enum Color{Red,Blue,Green};
var backGroundColor = Color.Green;
console.log("backGroundColor :", backGroundColor);
