exports.popRe = function(arr) {
  var val;
  if (arr.length > 0) {
    val = arr[arr.length - 1];
    arr.length--;
  }
  return val;
}

exports.pushRe = function(arr, x) {
  arr[arr.length] = x;
  return arr.length;
}

exports.shiftRe = function(arr) {
  if (!arr.length) return;
  var val = arr[0];
  for (i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length--;
  return val;
}

exports.unshiftRe = function(arr, x) {
  for (var i = (arr.length - 1); i >= 0; i--) {
    arr[i + 1] = arr[i];
  }
  arr[0] = x;
  return arr.length;
}
