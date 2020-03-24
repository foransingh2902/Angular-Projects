class Shapes {
  // by default all are public
  // protected implies that the method or property is accessible only internally
  // within the class or any class that extends it but not externally.
  // private are only accessible inside the class.
  x: number;
  private y: number;
  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }
  // same as public getDistance()
  getDistance() {
    // some code
    console.log("x : ", this.x, " y: ", this.y);
  }
}

let shape1 = new Shapes(3, 5);
shape1.getDistance();
shape1.x = 3;
// not possible to assign as y is made private shape1.y=4;
