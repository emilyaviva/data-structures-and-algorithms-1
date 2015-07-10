var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';

function frequencyInString(str) {
  var freqs = {};
  for (var i = 0; i < str.length; i++) {
    var current = str.charAt(i);
    if (uppercase.indexOf(current) > -1) {
      var char = lowercase[uppercase.indexOf(current)];
    } else {
      var char = str.charAt(i);
    }
    if (freqs[char]) {
      freqs[char]++;
    } else {
      (freqs[char]) = 1;
    }
  }
  return freqs;
}


function frequency2(arr) {
  var bigstr = '';
  for (var i = 0; i < arr.length; i++) {
    bigstr += arr[i];
  }
  var mostOftenTimes = 0;
  var mostOftenLetters = [];
  var frequencies = frequencyInString(bigstr);
  for (var letter in frequencies) {
    if (frequencies[letter] > mostOftenTimes) {
      mostOftenTimes = frequencies[letter];
    }
  }
  for (var letter in frequencies) {
    if (frequencies[letter] === mostOftenTimes) {
      mostOftenLetters.push(letter);
    }
  }
  return mostOftenLetters;
}
