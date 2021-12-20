const questionContainer = document.getElementById('question-container');
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

let questionNumber = 0;
questionContainer.innerHTML = displayQuestions(questions[questionNumber])

/**
 * 
 */

function displayQuestions(question) {
  const options = ["A", "B", "C", "D"]
  const buttons = options.forEach(option => {
    return `<button class="option" id="${option}" data-value="${option}">${option} - ${question.option}</button>
    `
  });
  console.log(buttons)
  let display = `
    <h2>${question.question}</h2>
      <ol>
      ${buttons}
      </ol>`
      const optionsRef = Array.from(document.querySelectorAll(".option"));
      optionsRef.forEach(button => {
        button.addEventListener("click", checkAnswer(this))  
    });
      return display
  }
  console.log(displayQuestions(0))
/**
 * This function checks if the answer chosen is correct.
 */

function checkAnswer(buttonElement) {
  if (questions[questionNumber].correctAnswer == buttonElement.id){
    alert("Correct! You clicked on button: " + buttonElement.id)
  }
  else {
    alert("Incorrect! You clicked on button: " + buttonElement.id)
  }
  runGame(questionNumber);
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
  questionContainer.innerHTML = displayQuestions(questions[questionNumber]);
  console.log(questions[questionNumber])
}
}

/**  
 * This will show the user their total score out of the 
 * questions asked.
 * increaseScore(score) {
 *     if (== correct.Answer)
 *         score++;
 *     else
 *     
 * }
*/

// results(correct) {
//  if (correct <= 8) {
//  "You answered + score + answers correctly! Congratulations!"
// } else if
// }