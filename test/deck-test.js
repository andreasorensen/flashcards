const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const { createDeck } = require('../src/deck');
const { sampleData } = require('../test/sampleData');


describe('deck', function(){
  it('should be a function', function() {
    expect(createDeck).to.be.a('function')
  });

  it('should create an array of card objects', function(){
    const cards = sampleData
    const deck = createDeck(cards)
  });
});