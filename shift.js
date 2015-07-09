Array.prototype.shiftRe = function() {
  if (!this.length) return;
  var val = this[0];
  for (i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }
  this.length--;
  return val;
}
