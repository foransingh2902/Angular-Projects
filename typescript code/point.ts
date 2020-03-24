// NOTE : the properties are available in ECMA 5 or higher only
// so to run this we must specify the target for our tsc compiler
// tsc --target ES5 Properties.ts
// and then     node Properties.js

// this file is imported inside the moduleCall.ts

// this is now a module as its exported
export class Point {
  constructor(private _x?: number, private _y?: number) {}
  draw() {
    // some code
    console.log("x : ", this._x, " y: ", this._y);
  }
}
