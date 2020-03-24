class Shapes {
  x: number;
  y: number;
  // we cannot have multiple constructors in typescript i.e. no overloading
  // we added '?' with both the varibles which makes them optional
  // one more thing is that if we  add '?' to a variable the all the variables
  // after that should also be made optional. A better way is to keep the optional
  // variables at the last.
  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }
  draw(point: Shapes) {
    // some logic here
    console.log("draw the shape");
  }
  // as function is a part of class we call it 'method'
  getDistance() {
    // some code
    console.log("x : ", this.x, " y: ", this.y);
    return "hello";
  }
}
let shape: Shapes = new Shapes();
// same as
let shape1 = new Shapes(3, 5);
shape1.draw(shape);
shape1.getDistance();
