import Point from './Point';

export default class Path {
  constructor(x, y) {
    this.name = undefined;
    this.startPoint = null;
    this.points = [];

    this.addPoint(x, y);
  }

  setName = (name) => {
    this.name = name;
  };

  addPoint = (x, y) => {
    const newPoint = new Point(x, y);

    this.points = [...this.points, newPoint];

    if (!this.startPoint) {
      this.startPoint = newPoint;
    }

    return newPoint;
  };

  removePoint = (index) => {
    let removedPoint;

    if (index === undefined) {
      removedPoint = this.points.pop();
      this.points = [...this.points];

      return removedPoint;
    }

    const isValidIndex = validateIndex(index);

    if (!isValidIndex) {
      throw new Error(
        `${name} path has ${this.points.length} points. You can't remove ${index}th point`
      );
    }

    removedPoint = this.points.splice(index, 1)[0];

    this.points = [...this.points];

    return removedPoint;
  };

  validateIndex = (index) => {
    return index >= 0 && index < this.points.length;
  };
}
