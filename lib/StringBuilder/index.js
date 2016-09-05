import autobind from 'class-autobind';

export default class StringBuilder {
  constructor(baseString) {
    autobind(this);

    this.baseString = baseString;

    this.workingString = this.baseString;
  }

  setSuffix(str) {
    this.workingString = this.baseString + str;
    return this.toString();
  }

  toString() {
    return this.workingString;
  }
}
