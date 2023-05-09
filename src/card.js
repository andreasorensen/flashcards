
const createCard = (id, question, answers, correctAnswer) => ({
  id,
  question,
  answers,
  correctAnswer
});

const evaluateGuess = (guess, correctAnswer) => {
  if (guess === correctAnswer) {
    return 'Correct!'
  } else {
    return 'Incorrect!';
  }; 
}


module.exports = { 
  createCard,
  evaluateGuess 
};