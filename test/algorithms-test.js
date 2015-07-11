var unique = require('../lib/unique').unique;
var frequency2 = require('../lib/frequency2').frequency2;
var arrayRe = require('../lib/arrayRe');

var expect = require('chai').expect;

describe('arrayRe.js', function() {

  it('popRe should return 4 from [1, 2, 3, 4]', function() {
    expect(arrayRe.popRe([1,2,3,4])).to.eql([1,2,3,4].pop());
  });

  it('popRe should mutate [1, 2, 3, 4] to [1, 2, 3]', function() {
    var x = [1,2,3,4];
    var y = [1,2,3,4];
    expect(arrayRe.popRe(x)).to.eql(y.pop());
  });

  it('pushRe should return [1, 2, 3, \'a\'] when given [1, 2, 3] and \'a\'', function() {
    expect(arrayRe.pushRe([1,2,3], 'a')).to.eql([1,2,3].push('a'));
  });

  it('shiftRe should return 1 from [1, 2, 3, 4]', function() {
    expect(arrayRe.shiftRe([1,2,3,4])).to.eql([1,2,3,4].shift());
  });

  it('shiftRe should mutate [1, 2, 3, 4] to [2, 3, 4]', function() {
    var x = [1,2,3,4];
    var y = [1,2,3,4];
    expect(arrayRe.shiftRe(x)).to.eql(y.shift());
  });

  it('unshiftRe should return [\'a\', 1, 2, 3, 4] when given [1, 2, 3, 4] and \'a\'', function() {
    expect(arrayRe.unshiftRe([1,2,3,4], 'a')).to.eql([1,2,3,4].unshift('a'));
  });

});

describe('unique.js', function() {

  it('should return [1, 2, \'a\', null] from [1, 2, \'a\', 1, null, 1, null]', function() {
    expect(unique([1, 2, 'a', 1, null, 1, null])).to.eql([1, 2, 'a', null]);
  });

});

describe('frequency2.js', function() {

  it('should return [\'n\'] for the first article of the Universal Declaration of Human Rights', function() {
    var words = ['All', 'human', 'beings', 'are', 'born', 'free', 'and', 'equal', 'in', 'dignity', 'and', 'rights', 'They', 'are', 'endowed', 'with', 'reason', 'and', 'conscience', 'and', 'should', 'act', 'towards', 'one', 'another', 'in', 'a', 'spirit', 'of', 'brotherhood'];
    expect(frequency2(words)).to.eql(['n']);
  });

  it('should return [\'e\'] for the words [\'East\', \'Easter\', \'Eastern\', \'Eats\'] (case-insensitiviy)', function() {
    var words = ['Echo', 'Easter', 'Eastern', 'Eats'];
    expect(frequency2(words)).to.eql(['e']);
  });

  it('should return [\'a\', \'n\', \'o\'] for the words [\'a\', \'an\', \'no\', \'or\'] (multiple most often used)', function() {
    var words = ['a', 'an', 'no', 'or'];
    expect(frequency2(words)).to.eql(['a', 'n', 'o']);
  });

  it('should error out from [\'a\', \'hello3\'] (non-English letters)', function() {
    var words = ['a', 'hello3'];
    expect(function() {
      frequency2(words).to.throw('Non-English letter');
    });
  });

});
