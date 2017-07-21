import assert from 'assert';
import rhinorex from '../dist/rhinorex.min.js';

describe('A Pattern', () => {
  describe('when there is no method provided ( default )', () => {
    it('Should return true on valid pattern', done => {
      // assert.equal(rhinorex({ value: 'value', pattern: 'pattern' }), true);
      // assert.equal(rhinorex({ value: 'value', pattern: 'pattern' }), true);
      // assert.equal(rhinorex({ value: 'value', pattern: 'pattern' }), true);

      done();
    });

    it('Should return false on invalid pattern', done => {
      // assert.equal(rhinorex({ value: 'value', pattern: 'pattern' }), false);
      // assert.equal(rhinorex({ value: 'value', pattern: 'pattern' }), false);
      // assert.equal(rhinorex({ value: 'value', pattern: 'pattern' }), false);

      done();
    });
  });
});
