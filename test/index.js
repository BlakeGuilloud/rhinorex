import assert from 'assert';
import rhinorex from '../dist/rhinorex.min.js';

describe('Email', () => {
  describe('when there is no method provided ( default )', () => {
    it('Should return true on valid email addresses', done => {
      assert.equal(rhinorex({ value: 'blake@rhinogram.com', pattern: 'email' }), true);
      assert.equal(rhinorex({ value: 'a@b.c', pattern: 'email' }), true);
      assert.equal(rhinorex({ value: 'a@b.c 123', pattern: 'email' }), true);

      done();
    });

    it('Should return false on invalid email addresses', done => {
      assert.equal(rhinorex({ value: 'blake@rhinogram', pattern: 'email' }), false);
      assert.equal(rhinorex({ value: 'ab.c', pattern: 'email' }), false);
      assert.equal(rhinorex({ value: 'a@b 123', pattern: 'email' }), false);

      done();
    });
  });

  describe('when the `test` method is provided', () => {
    it('Should return true on valid email addresses', done => {
      assert.equal(rhinorex({ value: 'blake@rhinogram.com', pattern: 'email', method: 'test' }), true);
      assert.equal(rhinorex({ value: 'a@b.c', pattern: 'email', method: 'test' }), true);
      assert.equal(rhinorex({ value: 'a@b.c 123', pattern: 'email', method: 'test' }), true);

      done();
    });

    it('Should return false on invalid email addresses', done => {
      assert.equal(rhinorex({ value: 'blake@rhinogram', pattern: 'email', method: 'test' }), false);
      assert.equal(rhinorex({ value: 'ab.c', pattern: 'email', method: 'test' }), false);
      assert.equal(rhinorex({ value: 'a@b 123', pattern: 'email', method: 'test' }), false);

      done();
    });
  });

  describe('when the `match` method is provided', () => {
    it('Should return a valued array on valid email addresses', done => {
      assert.equal(
        rhinorex({ value: 'blake@rhinogram.com', pattern: 'email', method: 'match' })[0],
        'blake@rhinogram.c'
      );
      assert.equal(rhinorex({ value: 'blake@rhinogram.com', pattern: 'email', method: 'match' }).index, 0);
      assert.equal(
        rhinorex({ value: 'blake@rhinogram.com', pattern: 'email', method: 'match' }).input,
        'blake@rhinogram.com'
      );

      done();
    });

    it('Should return null on invalid email addresses', done => {
      assert.equal(rhinorex({ value: 'blake@rhinogram', pattern: 'email', method: 'match' }), null);
      assert.equal(rhinorex({ value: 'ab.c', pattern: 'email', method: 'match' }), null);
      assert.equal(rhinorex({ value: 'a@b 123', pattern: 'email', method: 'match' }), null);

      done();
    });
  });

  describe('when the `exec` method is provided', () => {
    it('Should return a valued array on valid email addresses', done => {
      assert.equal(
        rhinorex({ value: 'blake@rhinogram.com', pattern: 'email', method: 'exec' })[0],
        'blake@rhinogram.c'
      );
      assert.equal(rhinorex({ value: 'blake@rhinogram.com', pattern: 'email', method: 'exec' }).index, 0);
      assert.equal(
        rhinorex({ value: 'blake@rhinogram.com', pattern: 'email', method: 'exec' }).input,
        'blake@rhinogram.com'
      );

      done();
    });

    it('Should return null on invalid email addresses', done => {
      assert.equal(rhinorex({ value: 'blake@rhinogram', pattern: 'email', method: 'exec' }), null);
      assert.equal(rhinorex({ value: 'ab.c', pattern: 'email', method: 'exec' }), null);
      assert.equal(rhinorex({ value: 'a@b 123', pattern: 'email', method: 'exec' }), null);

      done();
    });
  });

  describe('when the `search` method is provided', () => {
    it('Should return the index of the found pattern on valid email addresses', done => {
      assert.equal(rhinorex({ value: 'blake@rhinogram', pattern: 'email', method: 'test' }), 0);
      assert.equal(rhinorex({ value: 'a@b.c', pattern: 'email', method: 'search' }), 0);
      assert.equal(rhinorex({ value: 'a@b.c 123', pattern: 'email', method: 'search' }), 0);

      done();
    });

    it('Should return -1 on invalid email addresses', done => {
      assert.equal(rhinorex({ value: 'blake@rhinogram', pattern: 'email', method: 'search' }), -1);
      assert.equal(rhinorex({ value: 'ab.c', pattern: 'email', method: 'search' }), -1);
      assert.equal(rhinorex({ value: 'a@b 123', pattern: 'email', method: 'search' }), -1);

      done();
    });
  });
});
