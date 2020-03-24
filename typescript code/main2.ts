// datatypes and enums
let a;
a = 2;
a = "name";
a = true;
// to avoid this use type annotations
let b: number;
// b='a'; this will give an error now
b = 5;

// different types
let a1: number;
let a2: string;
let a3: boolean;
let a4: any; // by default also its any
let a5: number[];
let a6: any[] = [1, 2, "name", true];

// in plain javascript
const colorRed = 0;
const colorBlue = 0;
const colorGreen = 0;

// in typescript we can create a enum
enum Color {
  Red = 0,
  Blue = 1,
  Green = 2
}
// its equivalent to enum Color{Red,Blue,Green};
let backGroundColor = Color.Green;
console.log("backGroundColor :", backGroundColor);
