// NOTE : the properties are available in ECMA 5 or higher only
// so to run this we must specify the target for our tsc compiler
// tsc --target ES5 Properties.ts
// and then     node Properties.js
var Circle = /** @class */ (function () {
    // use the standard to add a prefix _ for a variable so that the getter and setters
    // can be named using simple variable name instead of capital notation.
    function Circle(x, _y) {
        this.x = x;
        this._y = _y;
    }
    Object.defineProperty(Circle.prototype, "X", {
        // if we want to make this a read only property, comment out the set X()
        get: function () {
            return this.x;
        },
        // this is called property
        set: function (value) {
            if (value < 0) {
                throw new Error("value is less than zero");
            }
            else {
                this.x = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (y) {
            this._y = y;
        },
        enumerable: true,
        configurable: true
    });
    Circle.prototype.getDistance = function () {
        // some code
        console.log("x : ", this.x, " y: ", this._y);
    };
    return Circle;
}());
var shape1 = new Circle(3, 5);
shape1.getDistance();
// see how the property is accessed
shape1.X = 47;
console.log("value of x:", shape1.X);
