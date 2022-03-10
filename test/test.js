import { describe, it } from 'mocha';
import assert from 'assert';
import {expect} from 'chai';
import {Func, FuncClass} from '../index.js';

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('Func', function () {
  describe('add', function () {
    const arg1 = 3, arg2 = 5, result = 8;
    it('should return a number', function () {
      expect(Func.Add(arg1,arg2)).to.be.a('number');
    });
    it('should add up two numbers', function () {
      expect(Func.Add(arg1,arg2)).to.equal(result);
    });
  });
  describe('mul', function () {
    const arg1 = 3, arg2 = 5, result = 15;
    it('should return a number', function () {
      expect(Func.Mul(arg1,arg2)).to.be.a('number');
    });
    it('should multiply two numbers', function () {
      expect(Func.Mul(arg1,arg2)).to.equal(result);
    });
  });
});

describe('FuncClass', function () {
  describe('add', function () {
    const arg1 = 3, arg2 = 5, result = 8;
    const fc = new FuncClass(arg1,arg2);
    it('should return a number', function () {
      expect(fc.Add()).to.be.a('number');
    });
    it('should add up two numbers', function () {
      expect(fc.Add()).to.equal(result);
    });
  });
  describe('mul', function () {
    const arg1 = 3, arg2 = 5, result = 15;
    const fc = new FuncClass(arg1,arg2);
    it('should return a number', function () {
      expect(fc.Mul(arg1,arg2)).to.be.a('number');
    });
    it('should multiply two numbers', function () {
      expect(fc.Mul(arg1,arg2)).to.equal(result);
    });
  });
});