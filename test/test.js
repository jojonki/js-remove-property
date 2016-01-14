'use strict';

var should     = require('should'),
    removeProp = require('../index');

describe('#Invalida data input', function () {
  it('set null key for remove key', function() {
    (function() {
      var testData = { a: 2, b: {c: 5, d: 6}};
      removeProp(null, testData);
    }).should.not.throw();
  });
  it('set null object for target object', function() {
    (function() {
      removeProp('a', null);
    }).should.not.throw();
  });
  it('set null for both arguments', function() {
    (function() {
      removeProp(null, null);
    }).should.not.throw();
  });
  it('insufficient argument', function() {
    (function() {
      var testData = { a: 2, b: {c: 5, d: 6}};
      removeProp(testData);
    }).should.not.throw();
  });
  it('empty arguments', function() {
    (function() {
      removeProp();
    }).should.not.throw();
  });
});

describe('Remove properties recursively', function () {
  it('remove prop of 1st layer property', function() {
    var testData = { a: 2, b: {c: 5, d: 6}};
    var propName = 'b';
    removeProp(propName, testData);
    should(testData[propName]).not.be.ok();
  });
  it('remove prop of 2nd layer property', function() {
    var testData = { a: 2, b: {c: 5, d: 6}};
    var propName = 'c';
    removeProp(propName, testData);
    should(testData['b'][propName]).not.be.ok();
  });
  it('remove prop of complex object', function() {
    var testData = { a: 2, b: {z: 5, d: [1, 2, {z: 'hoge'}]}};
    var propName = 'z';
    removeProp(propName, testData);
    should(testData['b'][propName]).not.be.ok();
    should(testData['b']['d'][2][propName]).not.be.ok();
  });
});
