
const createCard = (id, question, answers, correctAnswer) => ({
  id,
  question,
  answers,
  correctAnswer
});

function evaluateGuess(guess, correctAnswer) {
}


module.exports = { 
  createCard,
  evaluateGuess 
};