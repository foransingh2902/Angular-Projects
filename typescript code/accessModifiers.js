var Shapes = /** @class */ (function () {
    function Shapes(x, y) {
        this.x = x;
        this.y = y;
    }
    // same as public getDistance()
    Shapes.prototype.getDistance = function () {
        // some code
        console.log("x : ", this.x, " y: ", this.y);
    };
    return Shapes;
}());
var shape1 = new Shapes(3, 5);
shape1.getDistance();
shape1.x = 3;
// not possible to assign as y is made private shape1.y=4;
