const chai = require('chai');
const expect = chai.expect;

const challenge1 = require('../src/01/index');
const challenge2 = require('../src/02/index');

describe('Test -> Challenge 01', function () {
   it('numero = 0', function () {
      expect(challenge1(0)).to.equal(true)
   })
   it('numero = -1', function () {
      expect(challenge1(-1)).to.equal(true)
   })
   it('numero = 2', function () {
      expect(challenge1(2)).to.equal(false)
   })
})

describe('Test -> Challenge 02', function () {
   it('numero = 1', function () {
      expect(challenge2(1)).to.equal(0)
   })
   it('numero = 0', function () {
      expect(challenge2(0)).to.equal(1)
   })
})