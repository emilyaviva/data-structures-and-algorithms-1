Array.prototype.unshiftRe = function(x) {
  for (var i = (this.length - 1); i >= 0; i--) {
    this[i + 1] = this[i];
  }
  this[0] = x;
  return this.length;
}
