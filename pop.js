Array.prototype.popRe = function() {
  var val;
  if (this.length > 0) {
    val = this[this.length - 1];
    this.length--;
  }
  return val;
}
