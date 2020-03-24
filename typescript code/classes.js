var Shapes = /** @class */ (function () {
    // we cannot have multiple constructors in typescript i.e. no overloading
    // we added '?' with both the varibles which makes them optional
    // one more thing is that if we  add '?' to a variable the all the variables
    // after that should also be made optional. A better way is to keep the optional
    // variables at the last.
    function Shapes(x, y) {
        this.x = x;
        this.y = y;
    }
    Shapes.prototype.draw = function (point) {
        // some logic here
        console.log("draw the shape");
    };
    // as function is a part of class we call it 'method'
    Shapes.prototype.getDistance = function () {
        // some code
        console.log("x : ", this.x, " y: ", this.y);
        return "hello";
    };
    return Shapes;
}());
var shape = new Shapes();
// same as
var shape1 = new Shapes(3, 5);
shape1.draw(shape);
shape1.getDistance();
