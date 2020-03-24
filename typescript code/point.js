"use strict";
// NOTE : the properties are available in ECMA 5 or higher only
// so to run this we must specify the target for our tsc compiler
// tsc --target ES5 Properties.ts
// and then     node Properties.js
exports.__esModule = true;
// this file is imported inside the moduleCall.ts
// this is now a module as its exported
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        // some code
        console.log("x : ", this._x, " y: ", this._y);
    };
    return Point;
}());
exports.Point = Point;
