const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const { createDeck, countDeck } = require('../src/deck');
const { sampleData } = require('../test/sampleData');


describe('deck', function(){
  it('should be a function', function() {
    expect(createDeck).to.be.a('function')
  });

  it('should create an array of card objects', function(){
    const cards = sampleData
    const deck = createDeck(cards)
    expect(deck[0]).to.equal(sampleData[0])
    expect(deck[4]).to.equal(sampleData[4])
  });
});

describe('countDeck', function(){
  it('should be a function', function() {
    expect(countDeck).to.be.a('function')
  });

  it('should be able to count the number of cards in the deck', function() {
    const cards = sampleData
    const deck = createDeck(cards)
    expect(deck.length).to.equal(5)
  });
});