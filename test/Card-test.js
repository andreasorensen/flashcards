const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess } = require('../src/card');

const { sampleData } = require('../test/sampleData')

describe('card', function() {
  it('should be a function', function() {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  }); 
});

describe('evaluateGuess', function(){
  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function');
  });

  it('should evaluate is guess is correct', function() {
    const guess = sampleData[0].correctAnswer;
    const correctAnswer = sampleData[0].correctAnswer;
    const compareAnswers = evaluateGuess(guess, correctAnswer);
    expect(compareAnswers).to.equal('Correct!')
  });

  it('should evaluate if a guess is incorrect', function() {
    const incorrectGuess = sampleData[0].answers[1];
    const correctAnswer = sampleData[0].correctAnswer;
    const compareAnswers2 = evaluateGuess(incorrectGuess, correctAnswer);
    expect(compareAnswers2).to.equal('Incorrect!')
  })

  


});