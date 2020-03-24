class Shapes {
  constructor(private x?: number, private y?: number) {
    // this will create 2 private varibales x and y
    // its helps in reducing noisy code
    // typescript compiler will generate these fields for us
    // and also intialize these values as passed.
  }
  getDistance() {
    // some code
    console.log("x : ", this.x, " y: ", this.y);
  }
}

let shape1 = new Shapes(3, 5);
shape1.getDistance();
// not possible to assign as y is made private shape1.y=4;
