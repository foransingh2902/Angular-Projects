// NOTE : the properties are available in ECMA 5 or higher only
// so to run this we must specify the target for our tsc compiler
// tsc --target ES5 Properties.ts
// and then     node Properties.js

class Circle {
  // use the standard to add a prefix _ for a variable so that the getter and setters
  // can be named using simple variable name instead of capital notation.
  constructor(private x?: number, private _y?: number) {}
  // this is called property
  set X(value: number) {
    if (value < 0) {
      throw new Error("value is less than zero");
    } else {
      this.x = value;
    }
  }
  // if we want to make this a read only property, comment out the set X()
  get X() {
    return this.x;
  }
  get y() {
    return this._y;
  }

  set y(y: number) {
    this._y = y;
  }

  getDistance() {
    // some code
    console.log("x : ", this.x, " y: ", this._y);
  }
}

let shape1 = new Circle(3, 5);
shape1.getDistance();
// see how the property is accessed
shape1.X = 47;
console.log("value of x:", shape1.X);
