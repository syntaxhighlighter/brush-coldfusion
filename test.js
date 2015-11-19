var chai = require('chai');
var expect = chai.expect;
var parser = require('parser');
var Brush = require('.');
var sample = require('raw!./sample.txt');

describe('brush-coldfusion', function() {
  var instance = null;

  before(function() {
    return instance = new Brush();
  });

  it('has populated code sample', function() {
    return expect(sample).to.not.match(/^Populate/);
  });

  describe('instance', function() {
    return it('has `regexList`', function() {
      return expect(instance).to.have.property('regexList');
    });
  });

  return describe('parsing', function() {
    var matches = null;

    before(function() {
      return matches = parser.parse(sample, instance.regexList);
    });

    return it('can parse', function() {
      return expect(matches).to.have.length.above(0);
    });
  });
});