const questionContainer = document.getElementById('question-container')

const questions = [
    {
        'question': 'What is the best language?',
        'A': 'JS',
        'B': 'HTML',
        'C': 'CSS',
        'D': 'Python',
        'correctAnswer': 'D'
      },
      {
        'question': 'Who is the president?',
        'A': 'John',
        'B': 'James',
        'C': 'Joe',
        'D': 'Micheal',
        'correctAnswer': 'A'
      }  
    ]

const questionNumber = 0;
questionContainer.innerHTML = displayQuestions(questions[questionNumber])

/**
 * 
 */

function displayQuestions(question) {
    let display = `
    <h2>${question.question}</h2>
      <ol>
        <button id="A" data-value="A" onclick="checkAnswer(this)">A - ${question.A}</button>
        <button id="B" data-value="B" onclick="checkAnswer(this)">B - ${question.B}</button>
        <button id="C" data-value="C" onclick="checkAnswer(this)">C - ${question.C}</button>
        <button id="D" data-value="D" onclick="checkAnswer(this)">D - ${question.D}</button>
      </ol>`   
    return display
  }

/**
 * This function checks if the answer chosen is correct.
 */

function checkAnswer(buttonElement) {
  if (questions[0].correctAnswer == buttonElement.id){
    alert("Correct! You clicked on button: " + buttonElement.id)
  }
  else {
    alert("Incorrect! You clicked on button: " + buttonElement.id)
  }
  runGame()
}

/**  
 *  The game will either end or continue based on the number 
 * of questions the user has answered.
*/

function runGame(questionNumber) {
  if (questions.length == questionNumber) {
    results();
} else {
  questionNumber++;
  questionContainer.innerHTML = displayQuestions(questions[questionNumber])
}
}

/**  
 *  This will show the user their total score out of the 
 * questions asked
*/

// results(correct) {
//  if (correct <= 8) {
//  "You answered + + answers correctly! Congratulations!"
// } else if
// }