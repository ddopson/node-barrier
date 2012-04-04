var _ = require('underscore');
var Mocha = require('mocha');
var Barrier = require('../lib/barrier');
var expect = require('expect.js');

describe('when waiting on a barrier', function () {
  var b = new Barrier();
  var done = false;
  it('is not called early', function () {
    b.once(function () { done = true; });
    expect(done).to.eql(false);
  });
  describe('and calling complete', function () {
    it('completes', function () {
      expect(done).to.eql(false);
      b.complete();
      expect(done).to.eql(true);
    });
  });
})
