import { v4 as uuidv4 } from 'uuid';

export default class Layer {
  constructor(options) {
    const { paths = [], isActive = true } = options;

    this.paths = paths;
    this.isActive = isActive;
    this.isVisible = true;
    this.id = uuidv4();
  }

  add(path) {
    this.paths = [...this.paths, path];
  }

  show() {
    this.isVisible = true;
  }

  hide() {
    this.isVisible = false;
  }
}
