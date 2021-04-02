export default class Layer {
  constructor(options) {
    const { paths = [], isActive = true } = options;

    this.paths = paths;
    this.isActive = isActive;
    this.isVisible = true;
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
