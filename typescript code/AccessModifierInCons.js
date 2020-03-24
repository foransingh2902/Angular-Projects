var Shapes = /** @class */ (function () {
    function Shapes(x, y) {
        this.x = x;
        this.y = y;
        // this will create 2 private varibales x and y
        // its helps in reducing noisy code
        // typescript compiler will generate these fields for us
        // and also intialize these values as passed.
    }
    Shapes.prototype.getDistance = function () {
        // some code
        console.log("x : ", this.x, " y: ", this.y);
    };
    return Shapes;
}());
var shape1 = new Shapes(3, 5);
shape1.getDistance();
// not possible to assign as y is made private shape1.y=4;
