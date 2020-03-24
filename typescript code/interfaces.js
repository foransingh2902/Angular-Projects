var drawpoint = function (point) {
    // some code here
};
drawpoint({ x: 1, y: 3 });
// problem with this approach is that we can even pass the 'name:'foran''
// and it will work
// solution 1: inline annotation
var drawpointN = function (point) {
    // some code
};
var drawpointI = function (point) {
    console.log("x:", point.x, " y:", point.y);
};
drawpointI({ x: 23, y: 24 });
