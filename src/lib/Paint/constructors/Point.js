// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2
function calcAngleDegrees(x, y) {
  return (Math.atan2(y, x) * 180) / Math.PI;
}

export default class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.angle = calcAngleDegrees(x, y);
    this.length = Math.sqrt(x ** 2 + y ** 2);
  }
}
