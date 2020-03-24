let drawpoint = function(point) {
  // some code here
};
drawpoint({ x: 1, y: 3 });
// problem with this approach is that we can even pass the 'name:'foran''
// and it will work
// solution 1: inline annotation
let drawpointN = function(point: { x: number; y: number }) {
  // some code
};
// but the above approach is verbose as if we have to change the point object
// at some point of time then we have to go and make change to every line in our project

// solution 2 : use interface
interface Point {
  x: number;
  y: number;
}
let drawpointI = function(point: Point) {
  console.log("x:", point.x, " y:", point.y);
};
drawpointI({ x: 23, y: 24 });

interface data {
  x: number;
  y: number;
  z: () => void;
}
