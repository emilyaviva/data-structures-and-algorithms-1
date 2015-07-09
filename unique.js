function unique(arr) {
  var xs = {};
  var output = [];
  for (var i = 0; i < arr.length; i++) {
    if (!xs[arr[i]]) {
      xs[arr[i]] = true;
      output.push(arr[i]);
    }
  }
  return output;
}
